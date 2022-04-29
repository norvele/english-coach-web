import { LanguageI, Pronoun, TaskI } from "@/common";

export class SystemLanguage implements LanguageI {
  getSolution(task: TaskI) {
    const pronoun = task.pronoun === Pronoun.i ? "I" : task.pronoun;
    const parts = [task.tense, task.sign, pronoun, task.verb];
    return parts.join(", ");
  }
}
