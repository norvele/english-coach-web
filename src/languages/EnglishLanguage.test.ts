import { LanguageTestCase } from "../testUtils/language";
import { Task } from "../Task";
import { Pronoun, Sign, Tense, Verb } from "../common";
import { EnglishLanguage } from "./EnglishLanguage";

const testCases: LanguageTestCase[] = [
  // presentSimple
  {
    task: new Task({
      tense: Tense.presentSimple,
      pronoun: Pronoun.i,
      sign: Sign.positive,
      verb: Verb.work,
    }),
    solution: "I work",
  },
  {
    task: new Task({
      tense: Tense.presentSimple,
      pronoun: Pronoun.i,
      sign: Sign.negative,
      verb: Verb.work,
    }),
    solution: "I don't work",
  },
  {
    task: new Task({
      tense: Tense.presentSimple,
      pronoun: Pronoun.i,
      sign: Sign.question,
      verb: Verb.work,
    }),
    solution: "Do I work?",
  },
  {
    task: new Task({
      tense: Tense.presentSimple,
      pronoun: Pronoun.you,
      sign: Sign.positive,
      verb: Verb.work,
    }),
    solution: "You work",
  },
  {
    task: new Task({
      tense: Tense.presentSimple,
      pronoun: Pronoun.you,
      sign: Sign.negative,
      verb: Verb.work,
    }),
    solution: "You don't work",
  },
  {
    task: new Task({
      tense: Tense.presentSimple,
      pronoun: Pronoun.you,
      sign: Sign.question,
      verb: Verb.work,
    }),
    solution: "Do you work?",
  },
  {
    task: new Task({
      tense: Tense.presentSimple,
      pronoun: Pronoun.he,
      sign: Sign.positive,
      verb: Verb.work,
    }),
    solution: "He works",
  },
  {
    task: new Task({
      tense: Tense.presentSimple,
      pronoun: Pronoun.he,
      sign: Sign.positive,
      verb: Verb.go,
    }),
    solution: "He goes",
  },
  {
    task: new Task({
      tense: Tense.presentSimple,
      pronoun: Pronoun.he,
      sign: Sign.negative,
      verb: Verb.work,
    }),
    solution: "He doesn't work",
  },
  {
    task: new Task({
      tense: Tense.presentSimple,
      pronoun: Pronoun.he,
      sign: Sign.question,
      verb: Verb.work,
    }),
    solution: "Does he work?",
  },
  {
    task: new Task({
      tense: Tense.presentSimple,
      pronoun: Pronoun.i,
      sign: Sign.positive,
      verb: Verb.study,
    }),
    solution: "I study",
  },
  {
    task: new Task({
      tense: Tense.presentSimple,
      pronoun: Pronoun.he,
      sign: Sign.positive,
      verb: Verb.study,
    }),
    solution: "He studies",
  },
  // presentContinuous
  {
    task: new Task({
      tense: Tense.presetContinuous,
      pronoun: Pronoun.i,
      sign: Sign.positive,
      verb: Verb.work,
    }),
    solution: "I am working",
  },
  {
    task: new Task({
      tense: Tense.presetContinuous,
      pronoun: Pronoun.i,
      sign: Sign.negative,
      verb: Verb.work,
    }),
    solution: "I am not working",
  },
  {
    task: new Task({
      tense: Tense.presetContinuous,
      pronoun: Pronoun.i,
      sign: Sign.question,
      verb: Verb.work,
    }),
    solution: "Am I working?",
  },
  {
    task: new Task({
      tense: Tense.presetContinuous,
      pronoun: Pronoun.you,
      sign: Sign.positive,
      verb: Verb.work,
    }),
    solution: "You are working",
  },
  {
    task: new Task({
      tense: Tense.presetContinuous,
      pronoun: Pronoun.you,
      sign: Sign.negative,
      verb: Verb.work,
    }),
    solution: "You aren't working",
  },
  {
    task: new Task({
      tense: Tense.presetContinuous,
      pronoun: Pronoun.you,
      sign: Sign.question,
      verb: Verb.work,
    }),
    solution: "Are you working?",
  },
  {
    task: new Task({
      tense: Tense.presetContinuous,
      pronoun: Pronoun.he,
      sign: Sign.positive,
      verb: Verb.work,
    }),
    solution: "He is working",
  },
  {
    task: new Task({
      tense: Tense.presetContinuous,
      pronoun: Pronoun.he,
      sign: Sign.negative,
      verb: Verb.work,
    }),
    solution: "He isn't working",
  },
  {
    task: new Task({
      tense: Tense.presetContinuous,
      pronoun: Pronoun.he,
      sign: Sign.question,
      verb: Verb.work,
    }),
    solution: "Is he working?",
  },
  {
    task: new Task({
      tense: Tense.presetContinuous,
      pronoun: Pronoun.i,
      sign: Sign.positive,
      verb: Verb.study,
    }),
    solution: "I am studying",
  },
  // futureSimple
  {
    task: new Task({
      tense: Tense.futureSimple,
      pronoun: Pronoun.i,
      sign: Sign.positive,
      verb: Verb.work,
    }),
    solution: "I will work",
  },
  {
    task: new Task({
      tense: Tense.futureSimple,
      pronoun: Pronoun.i,
      sign: Sign.negative,
      verb: Verb.work,
    }),
    solution: "I won't work",
  },
  {
    task: new Task({
      tense: Tense.futureSimple,
      pronoun: Pronoun.i,
      sign: Sign.question,
      verb: Verb.work,
    }),
    solution: "Will I work?",
  },
  {
    task: new Task({
      tense: Tense.futureSimple,
      pronoun: Pronoun.you,
      sign: Sign.positive,
      verb: Verb.work,
    }),
    solution: "You will work",
  },
  {
    task: new Task({
      tense: Tense.futureSimple,
      pronoun: Pronoun.you,
      sign: Sign.negative,
      verb: Verb.work,
    }),
    solution: "You won't work",
  },
  {
    task: new Task({
      tense: Tense.futureSimple,
      pronoun: Pronoun.you,
      sign: Sign.question,
      verb: Verb.work,
    }),
    solution: "Will you work?",
  },
  {
    task: new Task({
      tense: Tense.futureSimple,
      pronoun: Pronoun.he,
      sign: Sign.positive,
      verb: Verb.work,
    }),
    solution: "He will work",
  },
  {
    task: new Task({
      tense: Tense.futureSimple,
      pronoun: Pronoun.he,
      sign: Sign.negative,
      verb: Verb.work,
    }),
    solution: "He won't work",
  },
  {
    task: new Task({
      tense: Tense.futureSimple,
      pronoun: Pronoun.he,
      sign: Sign.question,
      verb: Verb.work,
    }),
    solution: "Will he work?",
  },
  // pastSimple
  {
    task: new Task({
      tense: Tense.pastSimple,
      pronoun: Pronoun.i,
      sign: Sign.positive,
      verb: Verb.work,
    }),
    solution: "I worked",
  },
  {
    task: new Task({
      tense: Tense.pastSimple,
      pronoun: Pronoun.i,
      sign: Sign.negative,
      verb: Verb.work,
    }),
    solution: "I didn't work",
  },
  {
    task: new Task({
      tense: Tense.pastSimple,
      pronoun: Pronoun.i,
      sign: Sign.question,
      verb: Verb.work,
    }),
    solution: "Did I work?",
  },
  {
    task: new Task({
      tense: Tense.pastSimple,
      pronoun: Pronoun.you,
      sign: Sign.positive,
      verb: Verb.work,
    }),
    solution: "You worked",
  },
  {
    task: new Task({
      tense: Tense.pastSimple,
      pronoun: Pronoun.you,
      sign: Sign.negative,
      verb: Verb.work,
    }),
    solution: "You didn't work",
  },
  {
    task: new Task({
      tense: Tense.pastSimple,
      pronoun: Pronoun.you,
      sign: Sign.question,
      verb: Verb.work,
    }),
    solution: "Did you work?",
  },
  {
    task: new Task({
      tense: Tense.pastSimple,
      pronoun: Pronoun.he,
      sign: Sign.positive,
      verb: Verb.work,
    }),
    solution: "He worked",
  },
  {
    task: new Task({
      tense: Tense.pastSimple,
      pronoun: Pronoun.he,
      sign: Sign.negative,
      verb: Verb.work,
    }),
    solution: "He didn't work",
  },
  {
    task: new Task({
      tense: Tense.pastSimple,
      pronoun: Pronoun.he,
      sign: Sign.question,
      verb: Verb.work,
    }),
    solution: "Did he work?",
  },
  {
    task: new Task({
      tense: Tense.pastSimple,
      pronoun: Pronoun.i,
      sign: Sign.positive,
      verb: Verb.study,
    }),
    solution: "I studied",
  },
  {
    task: new Task({
      tense: Tense.pastSimple,
      pronoun: Pronoun.i,
      sign: Sign.positive,
      verb: Verb.go,
    }),
    solution: "I went",
  },
];

describe("English language", () => {
  testCases.forEach(({ task, solution }) => {
    test(`${task}`, () => {
      const english = new EnglishLanguage();
      const result = english.getSolution(task);
      expect(result).toEqual(solution);
    });
  });
});
