import { LanguageI, TaskI } from "../common";

export class SystemLanguage implements LanguageI {
  getSolution(task: TaskI) {
    return `${task.tense}, ${task.sign}, ${task.pronoun}, ${task.verb}`;
  }
}
