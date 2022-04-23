import { Tense, Pronoun, Sign, Verb, LanguageI, TaskI } from "../types";
import { capitalize } from "../utils/capitalize";

const irregularVerbs: { [verb in Verb]?: [string, string, string] } = {
  go: ["go", "went", "gone"],
};

export class EnglishLanguage implements LanguageI {
  getSolution(task: TaskI) {
    const tensesMap = {
      [Tense.presentSimple]: this.getPresentSimpleSolution.bind(this),
      [Tense.presetContinuous]: this.getPresentContinuousSolution.bind(this),
      [Tense.futureSimple]: this.getFutureSimpleSolution.bind(this),
      [Tense.pastSimple]: this.getPastSimpleSolution.bind(this),
    };
    const result = tensesMap[task.tense](task);
    return capitalize(this.minimize(result));
  }

  protected getPresentSimpleSolution(task: TaskI) {
    const result = [];
    if (task.sign === Sign.positive) {
      result.push(task.pronoun);
      if ([Pronoun.he, Pronoun.she, Pronoun.it].includes(task.pronoun)) {
        result.push(this.addSEnding(task.verb));
      } else {
        result.push(task.verb);
      }
    } else if (task.sign === Sign.negative) {
      result.push(task.pronoun);
      if ([Pronoun.he, Pronoun.she, Pronoun.it].includes(task.pronoun)) {
        result.push("does not");
      } else {
        result.push("do not");
      }
      result.push(task.verb);
    } else {
      if ([Pronoun.he, Pronoun.she, Pronoun.it].includes(task.pronoun)) {
        result.push("Does");
      } else {
        result.push("Do");
      }
      result.push(task.pronoun);
      result.push(`${task.verb}?`);
    }
    return result.join(" ");
  }

  protected getPresentContinuousSolution(task: TaskI) {
    const result = [];
    let aux = "am";
    if ([Pronoun.you, Pronoun.we, Pronoun.they].includes(task.pronoun)) {
      aux = "are";
    } else if ([Pronoun.he, Pronoun.she, Pronoun.it].includes(task.pronoun)) {
      aux = "is";
    }
    const verb = this.addIngEnding(task.verb);
    if (task.sign === Sign.question) {
      result.push(aux, task.pronoun, `${verb}?`);
    } else {
      result.push(task.pronoun, aux);
      if (task.sign === Sign.negative) {
        result.push("not");
      }
      result.push(verb);
    }
    return result.join(" ");
  }

  protected getFutureSimpleSolution(task: TaskI) {
    const result = [];
    if (task.sign === Sign.question) {
      result.push("will", task.pronoun, `${task.verb}?`);
    } else {
      result.push(task.pronoun, "will");
      if (task.sign === Sign.negative) {
        result.push("not");
      }
      result.push(task.verb);
    }
    return result.join(" ");
  }

  protected getPastSimpleSolution(task: TaskI) {
    const result = [];
    if (task.sign === Sign.positive) {
      result.push(task.pronoun, this.get2VerbForm(task.verb));
    } else if (task.sign === Sign.negative) {
      result.push(task.pronoun, "did not", task.verb);
    } else {
      result.push("did", task.pronoun, `${task.verb}?`);
    }
    return result.join(" ");
  }

  protected addSEnding(verb: Verb) {
    const endChar = verb.charAt(verb.length - 1);
    if (endChar === "y") {
      const body = verb.substring(0, verb.length - 1);
      return `${body}ies`;
    }
    if (endChar === "o") {
      return `${verb}es`;
    }
    return `${verb}s`;
  }

  protected addIngEnding(verb: Verb) {
    return `${verb}ing`;
  }

  protected get2VerbForm(verb: Verb) {
    const irregularVerb = irregularVerbs[verb];
    if (irregularVerb) {
      return irregularVerb[1];
    }
    const endChar = verb.charAt(verb.length - 1);
    if (endChar === "y") {
      const body = verb.substring(0, verb.length - 1);
      return `${body}ied`;
    }
    return `${verb}ed`;
  }

  protected minimize(text: string) {
    const map = {
      "do not": "don't",
      "does not": "doesn't",
      "are not": "aren't",
      "is not": "isn't",
      "did not": "didn't",
      "will not": "won't",
    };
    let newText = text;
    Object.entries(map).forEach(([search, replacer]) => {
      newText = newText.replace(search, replacer);
    });
    return newText;
  }
}
