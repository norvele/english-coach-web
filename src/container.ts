import { TaskBuilder } from "./TaskBuilder";
import { EnglishLanguage } from "./languages/EnglishLanguage";
import { RussianLanguage } from "./languages/RussianLanguage";
import { SystemLanguage } from "./languages/SystemLanguage";
import { inject } from "vue";

export interface ContainerI {
  taskBuilder: TaskBuilder;
  englishLanguage: EnglishLanguage;
  russianLanguage: RussianLanguage;
  systemLanguage: SystemLanguage;
}

export const containerKey = Symbol("container");

export function injectContainer(): ContainerI {
  return inject(containerKey) as ContainerI;
}

export function createContainer(): ContainerI {
  return {
    taskBuilder: new TaskBuilder(),
    englishLanguage: new EnglishLanguage(),
    russianLanguage: new RussianLanguage(),
    systemLanguage: new SystemLanguage(),
  };
}
