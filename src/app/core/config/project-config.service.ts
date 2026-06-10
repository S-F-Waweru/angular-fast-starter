import { computed, Injectable, signal } from '@angular/core';
import { PROJECT_CONFIG, ProjectConfig } from './project.config';

@Injectable({ providedIn: 'root' })
export class ProjectConfigService {
  private readonly configState = signal<ProjectConfig>(PROJECT_CONFIG);

  config = this.configState.asReadonly();
  brand = computed(() => this.configState().brand);
  navigation = computed(() => this.configState().navigation);
  table = computed(() => this.configState().table);
  workspaceName = computed(() => this.configState().workspaceName);

  updateConfig(config: ProjectConfig) {
    this.configState.set(config);
  }
}

