import { Tense, Pronoun, Sign, Verb, LanguageI, TaskI } from "../types";
import { capitalize } from "../utils/capitalize";

type PronounsMap = Record<Pronoun, string>;
type VerbsMap = {
  [verb in Verb]: {
    present: PronounsMap;
    past: PronounsMap;
    future: PronounsMap;
  };
};

const pronounsMap: Record<Pronoun, string> = {
  i: "я",
  you: "ты",
  we: "мы",
  they: "они",
  he: "он",
  she: "она",
  it: "это",
};

const verbsMap: VerbsMap = {
  work: {
    present: {
      i: "работаю",
      you: "работаешь",
      we: "работаем",
      they: "работают",
      he: "работает",
      she: "работает",
      it: "работает",
    },
    past: {
      i: "работал",
      you: "работал",
      we: "работали",
      they: "работали",
      he: "работал",
      she: "работала",
      it: "работало",
    },
    future: {
      i: "буду работать",
      you: "будешь работать",
      we: "будем работать",
      they: "будут работать",
      he: "будет работать",
      she: "будет работать",
      it: "будет работать",
    },
  },
  study: {
    present: {
      i: "обучаюсь",
      you: "обучаешься",
      we: "обучаемся",
      they: "обучаются",
      he: "обучается",
      she: "обучается",
      it: "обучается",
    },
    past: {
      i: "обучался",
      you: "обучался",
      we: "обучались",
      they: "обучались",
      he: "обучался",
      she: "обучалась",
      it: "обучалось",
    },
    future: {
      i: "буду обучаться",
      you: "будешь обучаться",
      we: "будем обучаться",
      they: "будут обучаться",
      he: "будет обучаться",
      she: "будет обучаться",
      it: "будет обучаться",
    },
  },
  go: {
    present: {
      i: "иду",
      you: "идешь",
      we: "идем",
      they: "идут",
      he: "идет",
      she: "идет",
      it: "идет",
    },
    past: {
      i: "шел",
      you: "шел",
      we: "шли",
      they: "шли",
      he: "шел",
      she: "шла",
      it: "шло",
    },
    future: {
      i: "пойду",
      you: "пойдешь",
      we: "пойдем",
      they: "пойдут",
      he: "пойдет",
      she: "пойдет",
      it: "пойдет",
    },
  },
};

export class RussianLanguage implements LanguageI {
  getSolution(task: TaskI) {
    const tensesMap = {
      [Tense.presentSimple]: this.getPresentSimpleSolution.bind(this),
      [Tense.presetContinuous]: this.getPresentContinuousSolution.bind(this),
      [Tense.futureSimple]: this.getFutureSimpleSolution.bind(this),
      [Tense.pastSimple]: this.getPastSimpleSolution.bind(this),
    };
    const result = tensesMap[task.tense](task);
    return capitalize(result);
  }

  protected getPresentSimpleSolution(task: TaskI, now = false) {
    const acc = [pronounsMap[task.pronoun]];
    if (now) {
      acc.push("сейчас");
    }
    if (task.sign === Sign.negative) {
      acc.push("не");
    }
    acc.push(verbsMap[task.verb]["present"][task.pronoun]);
    const result = acc.join(" ");
    return task.sign === Sign.question ? `${result}?` : result;
  }

  protected getPresentContinuousSolution(task: TaskI) {
    return this.getPresentSimpleSolution(task, true);
  }

  protected getFutureSimpleSolution(task: TaskI) {
    const acc = [pronounsMap[task.pronoun]];
    if (task.sign === Sign.negative) {
      acc.push("не");
    }
    acc.push(verbsMap[task.verb]["future"][task.pronoun]);
    const result = acc.join(" ");
    return task.sign === Sign.question ? `${result}?` : result;
  }

  protected getPastSimpleSolution(task: TaskI) {
    const acc = [pronounsMap[task.pronoun]];
    if (task.sign === Sign.negative) {
      acc.push("не");
    }
    acc.push(verbsMap[task.verb]["past"][task.pronoun]);
    const result = acc.join(" ");
    return task.sign === Sign.question ? `${result}?` : result;
  }
}
