import { scenarios } from '@/data/seed/scenarios';

export const scenarioService = {
  getById(scenarioId: string) {
    return scenarios.find((scenario) => scenario.id === scenarioId);
  }
};
