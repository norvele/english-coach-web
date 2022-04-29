import { computed, Ref, ref } from "vue";
import {
  CurrentStep,
  Language,
  LanguageI,
  Settings,
  TaskBuilderSettings,
  TaskI,
} from "@/common";
import { injectContainer } from "@/container";
import {
  TaskBuilderError,
  TaskBuilderErrorCode,
} from "@/errors/TaskBuilderError";
import { GameError, GameErrorCode } from "@/errors/GameError";

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

  const taskBuilderSettings = computed<TaskBuilderSettings>(() => ({
    usedVerbs: settings.value.usedVerbs,
  }));

  const currentTask = ref<TaskI>(
    taskBuilder.createRandomTask(taskBuilderSettings.value)
  );
  const currentStep = ref<CurrentStep>(CurrentStep.task);

  const taskText = computed(() =>
    taskLanguage.value.getSolution(currentTask.value)
  );
  const solutionText = computed(() =>
    solutionLanguage.value.getSolution(currentTask.value)
  );

  const toNextStep = () => {
    try {
      if (currentStep.value === CurrentStep.solution) {
        currentTask.value = taskBuilder.createRandomTask(
          taskBuilderSettings.value
        );
        currentStep.value = CurrentStep.task;
      } else {
        currentStep.value = CurrentStep.solution;
      }
    } catch (e) {
      if (
        e instanceof TaskBuilderError &&
        e.code === TaskBuilderErrorCode.usedVerbsEmpty
      ) {
        throw new GameError(
          "Verbs used are empty",
          GameErrorCode.usedVerbsEmpty
        );
      }
      throw e;
    }
  };

  return {
    currentStep,
    taskText,
    solutionText,
    toNextStep,
  };
}
