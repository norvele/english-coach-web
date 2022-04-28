<script setup lang="ts">
import UiButton from "./UiButton.vue";
import UiDropdown from "./UiDropdown.vue";
import AppSettings from "./AppSettings.vue";
import { useGame } from "../composition/useGame";
import { ref } from "vue";
import { Settings, Verb } from "../common";
import { GameError, GameErrorCode } from "../errors/GameError";

const settings = ref<Settings>({
  taskLanguage: "russian",
  solutionLanguage: "english",
  usedVerbs: Object.values(Verb),
});

const errorMessage = ref("");

const { currentStep, taskText, solutionText, toNextStep } = useGame(settings);

const changeSettings = (value: Settings) => {
  settings.value = value;
  errorMessage.value = "";
};

const next = () => {
  try {
    toNextStep();
  } catch (e) {
    if (e instanceof GameError && e.code === GameErrorCode.usedVerbsEmpty) {
      errorMessage.value = "Pick at least 1 verb";
    }
  }
};
</script>

<template>
  <div class="app-game">
    <UiDropdown>
      <template #trigger>
        <UiButton>Settings</UiButton>
      </template>
      <template #body>
        <AppSettings :settings="settings" @change="changeSettings" />
      </template>
    </UiDropdown>

    <div class="app-game__container">
      <template v-if="errorMessage">
        <div class="app-game__error">
          {{ errorMessage }}
        </div>
      </template>
      <template v-else>
        <div class="app-game__text">
          {{ taskText }}
        </div>
        <UiButton class="app-game__button" @click="next">
          <template v-if="currentStep === 'task'">Translate</template>
          <template v-else>Next phrase</template>
        </UiButton>
        <div
          class="app-game__text"
          :class="{ _hidden: currentStep === 'task' }"
        >
          {{ solutionText }}
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.app-game__container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 24px;
}

.app-game__text {
  padding: 10px;
}

.app-game__text._hidden {
  visibility: hidden;
}

.app-game__error {
  color: coral;
}
</style>
