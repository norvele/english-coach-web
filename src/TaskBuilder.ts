import { Pronoun, Sign, TaskBuilderI, Tense, Verb } from "./types";
import { getRandomFromArray } from "./utils/getRandomFromArray";
import { Task } from "./Task";

export class TaskBuilder implements TaskBuilderI {
  createRandomTask() {
    const pronoun = getRandomFromArray(Object.values(Pronoun));
    const tense = getRandomFromArray(Object.values(Tense));
    const sign = getRandomFromArray(Object.values(Sign));
    const verb = getRandomFromArray(Object.values(Verb));
    return new Task({ tense, pronoun, sign, verb });
  }
}
