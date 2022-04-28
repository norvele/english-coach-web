import {
  Pronoun,
  Sign,
  TaskBuilderI,
  TaskBuilderSettings,
  Tense,
} from "./common";
import { getRandomFromArray } from "./utils/getRandomFromArray";
import { Task } from "./Task";
import {
  TaskBuilderErrorCode,
  TaskBuilderError,
} from "./errors/TaskBuilderError";

export class TaskBuilder implements TaskBuilderI {
  createRandomTask(settings: TaskBuilderSettings) {
    if (!settings.usedVerbs.length) {
      throw new TaskBuilderError(
        "Verbs used are empty",
        TaskBuilderErrorCode.usedVerbsEmpty
      );
    }
    const pronoun = getRandomFromArray(Object.values(Pronoun));
    const tense = getRandomFromArray(Object.values(Tense));
    const sign = getRandomFromArray(Object.values(Sign));
    const verb = getRandomFromArray(settings.usedVerbs);
    return new Task({ tense, pronoun, sign, verb });
  }
}
