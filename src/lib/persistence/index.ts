import { AppRepository } from './contracts';
import { LocalAppRepository } from './local/local-app-repository';

let repository: AppRepository | null = null;

export function getAppRepository(): AppRepository {
  if (!repository) {
    repository = new LocalAppRepository();
  }
  return repository;
}
