import { LanguageTestCase } from "../testUtils/language";
import { Task } from "../Task";
import { Pronoun, Sign, Tense, Verb } from "../common";
import { RussianLanguage } from "./RussianLanguage";

const testCases: LanguageTestCase[] = [
  // presentSimple
  {
    task: new Task({
      tense: Tense.presentSimple,
      pronoun: Pronoun.i,
      sign: Sign.positive,
      verb: Verb.work,
    }),
    solution: "Я (обычно) работаю",
  },
  {
    task: new Task({
      tense: Tense.presentSimple,
      pronoun: Pronoun.i,
      sign: Sign.negative,
      verb: Verb.work,
    }),
    solution: "Я (обычно) не работаю",
  },
  {
    task: new Task({
      tense: Tense.presentSimple,
      pronoun: Pronoun.i,
      sign: Sign.question,
      verb: Verb.work,
    }),
    solution: "Я (обычно) работаю?",
  },
  {
    task: new Task({
      tense: Tense.presentSimple,
      pronoun: Pronoun.you,
      sign: Sign.positive,
      verb: Verb.work,
    }),
    solution: "Ты (обычно) работаешь",
  },
  {
    task: new Task({
      tense: Tense.presentSimple,
      pronoun: Pronoun.you,
      sign: Sign.negative,
      verb: Verb.work,
    }),
    solution: "Ты (обычно) не работаешь",
  },
  {
    task: new Task({
      tense: Tense.presentSimple,
      pronoun: Pronoun.you,
      sign: Sign.question,
      verb: Verb.work,
    }),
    solution: "Ты (обычно) работаешь?",
  },
  {
    task: new Task({
      tense: Tense.presentSimple,
      pronoun: Pronoun.he,
      sign: Sign.positive,
      verb: Verb.work,
    }),
    solution: "Он (обычно) работает",
  },
  {
    task: new Task({
      tense: Tense.presentSimple,
      pronoun: Pronoun.he,
      sign: Sign.negative,
      verb: Verb.work,
    }),
    solution: "Он (обычно) не работает",
  },
  {
    task: new Task({
      tense: Tense.presentSimple,
      pronoun: Pronoun.he,
      sign: Sign.question,
      verb: Verb.work,
    }),
    solution: "Он (обычно) работает?",
  },
  // presentContinuous
  {
    task: new Task({
      tense: Tense.presetContinuous,
      pronoun: Pronoun.i,
      sign: Sign.positive,
      verb: Verb.work,
    }),
    solution: "Я (сейчас) работаю",
  },
  {
    task: new Task({
      tense: Tense.presetContinuous,
      pronoun: Pronoun.i,
      sign: Sign.negative,
      verb: Verb.work,
    }),
    solution: "Я (сейчас) не работаю",
  },
  {
    task: new Task({
      tense: Tense.presetContinuous,
      pronoun: Pronoun.i,
      sign: Sign.question,
      verb: Verb.work,
    }),
    solution: "Я (сейчас) работаю?",
  },
  {
    task: new Task({
      tense: Tense.presetContinuous,
      pronoun: Pronoun.you,
      sign: Sign.positive,
      verb: Verb.work,
    }),
    solution: "Ты (сейчас) работаешь",
  },
  {
    task: new Task({
      tense: Tense.presetContinuous,
      pronoun: Pronoun.you,
      sign: Sign.negative,
      verb: Verb.work,
    }),
    solution: "Ты (сейчас) не работаешь",
  },
  {
    task: new Task({
      tense: Tense.presetContinuous,
      pronoun: Pronoun.you,
      sign: Sign.question,
      verb: Verb.work,
    }),
    solution: "Ты (сейчас) работаешь?",
  },
  {
    task: new Task({
      tense: Tense.presetContinuous,
      pronoun: Pronoun.he,
      sign: Sign.positive,
      verb: Verb.work,
    }),
    solution: "Он (сейчас) работает",
  },
  {
    task: new Task({
      tense: Tense.presetContinuous,
      pronoun: Pronoun.he,
      sign: Sign.negative,
      verb: Verb.work,
    }),
    solution: "Он (сейчас) не работает",
  },
  {
    task: new Task({
      tense: Tense.presetContinuous,
      pronoun: Pronoun.he,
      sign: Sign.question,
      verb: Verb.work,
    }),
    solution: "Он (сейчас) работает?",
  },
  // futureSimple
  {
    task: new Task({
      tense: Tense.futureSimple,
      pronoun: Pronoun.i,
      sign: Sign.positive,
      verb: Verb.work,
    }),
    solution: "Я буду работать",
  },
  {
    task: new Task({
      tense: Tense.futureSimple,
      pronoun: Pronoun.i,
      sign: Sign.negative,
      verb: Verb.work,
    }),
    solution: "Я не буду работать",
  },
  {
    task: new Task({
      tense: Tense.futureSimple,
      pronoun: Pronoun.i,
      sign: Sign.question,
      verb: Verb.work,
    }),
    solution: "Я буду работать?",
  },
  {
    task: new Task({
      tense: Tense.futureSimple,
      pronoun: Pronoun.you,
      sign: Sign.positive,
      verb: Verb.work,
    }),
    solution: "Ты будешь работать",
  },
  {
    task: new Task({
      tense: Tense.futureSimple,
      pronoun: Pronoun.you,
      sign: Sign.negative,
      verb: Verb.work,
    }),
    solution: "Ты не будешь работать",
  },
  {
    task: new Task({
      tense: Tense.futureSimple,
      pronoun: Pronoun.you,
      sign: Sign.question,
      verb: Verb.work,
    }),
    solution: "Ты будешь работать?",
  },
  {
    task: new Task({
      tense: Tense.futureSimple,
      pronoun: Pronoun.he,
      sign: Sign.positive,
      verb: Verb.work,
    }),
    solution: "Он будет работать",
  },
  {
    task: new Task({
      tense: Tense.futureSimple,
      pronoun: Pronoun.he,
      sign: Sign.negative,
      verb: Verb.work,
    }),
    solution: "Он не будет работать",
  },
  {
    task: new Task({
      tense: Tense.futureSimple,
      pronoun: Pronoun.he,
      sign: Sign.question,
      verb: Verb.work,
    }),
    solution: "Он будет работать?",
  },
  // pastSimple
  {
    task: new Task({
      tense: Tense.pastSimple,
      pronoun: Pronoun.i,
      sign: Sign.positive,
      verb: Verb.work,
    }),
    solution: "Я работал",
  },
  {
    task: new Task({
      tense: Tense.pastSimple,
      pronoun: Pronoun.i,
      sign: Sign.negative,
      verb: Verb.work,
    }),
    solution: "Я не работал",
  },
  {
    task: new Task({
      tense: Tense.pastSimple,
      pronoun: Pronoun.i,
      sign: Sign.question,
      verb: Verb.work,
    }),
    solution: "Я работал?",
  },
  {
    task: new Task({
      tense: Tense.pastSimple,
      pronoun: Pronoun.you,
      sign: Sign.positive,
      verb: Verb.work,
    }),
    solution: "Ты работал",
  },
  {
    task: new Task({
      tense: Tense.pastSimple,
      pronoun: Pronoun.you,
      sign: Sign.negative,
      verb: Verb.work,
    }),
    solution: "Ты не работал",
  },
  {
    task: new Task({
      tense: Tense.pastSimple,
      pronoun: Pronoun.you,
      sign: Sign.question,
      verb: Verb.work,
    }),
    solution: "Ты работал?",
  },
  {
    task: new Task({
      tense: Tense.pastSimple,
      pronoun: Pronoun.he,
      sign: Sign.positive,
      verb: Verb.work,
    }),
    solution: "Он работал",
  },
  {
    task: new Task({
      tense: Tense.pastSimple,
      pronoun: Pronoun.he,
      sign: Sign.negative,
      verb: Verb.work,
    }),
    solution: "Он не работал",
  },
  {
    task: new Task({
      tense: Tense.pastSimple,
      pronoun: Pronoun.he,
      sign: Sign.question,
      verb: Verb.work,
    }),
    solution: "Он работал?",
  },
];

describe("Russian language", () => {
  testCases.forEach(({ task, solution }) => {
    test(`${task}`, () => {
      const english = new RussianLanguage();
      const result = english.getSolution(task);
      expect(result).toEqual(solution);
    });
  });
});
