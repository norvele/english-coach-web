<script setup lang="ts">
import UiButton from "./UiButton.vue";
import UiDropdown from "./UiDropdown.vue";
import AppSettings from "./AppSettings.vue";
import { useGame, Settings } from "../composition/useGame";
import { ref } from "vue";

const settings = ref<Settings>({
  taskLanguage: "russian",
  solutionLanguage: "english",
});

const { currentStep, taskText, solutionText, toNextStep } = useGame(settings);

const changeSettings = (value: Settings) => {
  console.log(value);
  settings.value = value;
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
      <div class="app-game__text">
        {{ taskText }}
      </div>
      <UiButton class="app-game__button" @click="toNextStep">
        <template v-if="currentStep === 'task'">Translate</template>
        <template v-else>Next phrase</template>
      </UiButton>
      <div class="app-game__text" :class="{ _hidden: currentStep === 'task' }">
        {{ solutionText }}
      </div>
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
</style>
