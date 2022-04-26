import { Pronoun, Sign, TaskI, Tense, Verb } from "./common";

type ConstructorData = {
  tense: Tense;
  pronoun: Pronoun;
  sign: Sign;
  verb: Verb;
};

export class Task implements TaskI {
  tense;
  pronoun;
  sign;
  verb;

  constructor({ tense, pronoun, sign, verb }: ConstructorData) {
    this.tense = tense;
    this.pronoun = pronoun;
    this.sign = sign;
    this.verb = verb;
  }

  toString() {
    return `${this.tense} | ${this.pronoun} | ${this.sign} | ${this.verb}`;
  }
}
