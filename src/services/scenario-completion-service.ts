import { AppRepository } from '@/lib/persistence/contracts';
import { lessonService } from '@/services/lesson-service';
import { createRewardTransaction } from '@/services/reward-service';
import { scenarioService } from '@/services/scenario-service';
import { applyScenarioResult } from '@/services/progress-service';
import { ScenarioResult } from '@/types/scenario-result';
import { applyBadgeProgression } from '@/services/badge-progression-service';

export interface CompleteScenarioInput {
  userId: string;
  scenarioId: string;
  choiceId: string;
}

export interface CompleteScenarioOutput {
  result: ScenarioResult;
  updatedXp: number;
  updatedCoins: number;
  newBadgeIds: string[];
}

export function completeScenario(
  repository: AppRepository,
  input: CompleteScenarioInput
): CompleteScenarioOutput {
  const scenario = scenarioService.getById(input.scenarioId);
  if (!scenario) {
    throw new Error(`Scenario not found: ${input.scenarioId}`);
  }

  const selectedChoice = scenario.choices.find((choice) => choice.id === input.choiceId);
  if (!selectedChoice) {
    throw new Error(`Choice not found: ${input.choiceId}`);
  }

  const progress = repository.getProgress();
  const stats = repository.getStats();
  const lesson = lessonService.getById(scenario.lessonId);
  if (!lesson) {
    throw new Error(`Lesson not found for scenario: ${scenario.id}`);
  }

  const nextLessonId = lessonService.getNextLessonId(scenario.lessonId);

  const next = applyScenarioResult(progress, stats, {
    lessonId: scenario.lessonId,
    scenarioId: scenario.id,
    xp: selectedChoice.xpReward + lesson.completionXp,
    coins: selectedChoice.coinReward + lesson.completionCoins,
    statChanges: {
      money: (selectedChoice.statChanges.money ?? 0) + (lesson.statChanges.money ?? 0),
      savings: (selectedChoice.statChanges.savings ?? 0) + (lesson.statChanges.savings ?? 0),
      stress: (selectedChoice.statChanges.stress ?? 0) + (lesson.statChanges.stress ?? 0),
      freedom: (selectedChoice.statChanges.freedom ?? 0) + (lesson.statChanges.freedom ?? 0)
    },
    unlockLessonId: nextLessonId
  });

  const { updatedProgress, newBadgeIds } = applyBadgeProgression(repository, input.userId, next.progress);

  repository.saveProgress(updatedProgress);
  repository.saveStats(next.stats);

  const rewardTransaction = createRewardTransaction(
    input.userId,
    'scenario',
    scenario.id,
    selectedChoice.xpReward + lesson.completionXp,
    selectedChoice.coinReward + lesson.completionCoins
  );
  repository.appendReward(rewardTransaction);

  const result: ScenarioResult = {
    prompt: scenario.prompt,
    choice: selectedChoice
  };
  repository.saveLastScenarioResult(result);

  return {
    result,
    updatedXp: updatedProgress.totalXp,
    updatedCoins: updatedProgress.totalCoins,
    newBadgeIds
  };
}
