import { SystemLanguage } from "../languages/SystemLanguage";
import { RussianLanguage } from "../languages/RussianLanguage";
import { EnglishLanguage } from "../languages/EnglishLanguage";
import { TaskBuilder } from "../TaskBuilder";
import { computed, Ref, ref } from "vue";
import { LanguageI, TaskI } from "../types";

enum CurrentStep {
  task = "task",
  solution = "solution",
}
export const languages = ["system", "russian", "english"] as const;
export type Language = typeof languages[number];
export type Settings = {
  taskLanguage: Language;
  solutionLanguage: Language;
};

export function useGame(settings: Ref<Settings>) {
  const taskBuilder = new TaskBuilder();
  const languagesMap: Record<Language, LanguageI> = {
    system: new SystemLanguage(),
    russian: new RussianLanguage(),
    english: new EnglishLanguage(),
  };

  const taskLanguage = computed(
    () => languagesMap[settings.value.taskLanguage]
  );
  const solutionLanguage = computed(
    () => languagesMap[settings.value.solutionLanguage]
  );

  const currentTask = ref<TaskI>(taskBuilder.createRandomTask());
  const currentStep = ref<CurrentStep>(CurrentStep.task);

  const taskText = computed(() =>
    taskLanguage.value.getSolution(currentTask.value)
  );
  const solutionText = computed(() =>
    solutionLanguage.value.getSolution(currentTask.value)
  );

  const toNextStep = () => {
    if (currentStep.value === CurrentStep.solution) {
      currentStep.value = CurrentStep.task;
      currentTask.value = taskBuilder.createRandomTask();
    } else {
      currentStep.value = CurrentStep.solution;
    }
  };

  return {
    currentStep,
    taskText,
    solutionText,
    toNextStep,
  };
}
