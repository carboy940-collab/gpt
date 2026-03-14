import { AppRepository } from '@/lib/persistence/contracts';
import { lessonService } from '@/services/lesson-service';
import { createRewardTransaction } from '@/services/reward-service';
import { scenarioService } from '@/services/scenario-service';
import { applyScenarioResult } from '@/services/progress-service';
import { ScenarioResult } from '@/types/scenario-result';

export interface CompleteScenarioInput {
  userId: string;
  scenarioId: string;
  choiceId: string;
}

export interface CompleteScenarioOutput {
  result: ScenarioResult;
  updatedXp: number;
  updatedCoins: number;
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
  const nextLessonId = lessonService.getNextLessonId(scenario.lessonId);

  const next = applyScenarioResult(progress, stats, {
    lessonId: scenario.lessonId,
    scenarioId: scenario.id,
    xp: selectedChoice.xpReward,
    coins: selectedChoice.coinReward,
    statChanges: selectedChoice.statChanges,
    unlockLessonId: nextLessonId
  });

  repository.saveProgress(next.progress);
  repository.saveStats(next.stats);

  const rewardTransaction = createRewardTransaction(
    input.userId,
    'scenario',
    scenario.id,
    selectedChoice.xpReward,
    selectedChoice.coinReward
  );
  repository.appendReward(rewardTransaction);

  const result: ScenarioResult = {
    prompt: scenario.prompt,
    choice: selectedChoice
  };
  repository.saveLastScenarioResult(result);

  return {
    result,
    updatedXp: next.progress.totalXp,
    updatedCoins: next.progress.totalCoins
  };
}
