export enum Pronoun {
  i = "i",
  you = "you",
  we = "we",
  they = "they",
  he = "he",
  she = "she",
  it = "it",
}
export enum Tense {
  presentSimple = "present simple",
  presetContinuous = "present continuous",
  futureSimple = "future simple",
  pastSimple = "past simple",
}
export enum Sign {
  positive = "positive",
  negative = "negative",
  question = "question",
}

export enum Verb {
  work = "work",
  study = "study",
  go = "go",
}

export interface TaskI {
  tense: Tense;
  pronoun: Pronoun;
  sign: Sign;
  verb: Verb;
  toString(): string;
}

export interface TaskBuilderI {
  createRandomTask(): TaskI;
}

export interface LanguageI {
  getSolution(task: TaskI): string;
}

export interface SelectOption {
  value: string;
  label: string;
}
