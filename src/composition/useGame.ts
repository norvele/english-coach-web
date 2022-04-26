import { computed, Ref, ref } from "vue";
import { CurrentStep, Language, LanguageI, Settings, TaskI } from "../common";
import { injectContainer } from "../container";

export function useGame(settings: Ref<Settings>) {
  const { taskBuilder, systemLanguage, englishLanguage, russianLanguage } =
    injectContainer();
  const languagesMap: Record<Language, LanguageI> = {
    system: systemLanguage,
    russian: russianLanguage,
    english: englishLanguage,
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
