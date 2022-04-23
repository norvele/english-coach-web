<script setup lang="ts">
import { Settings, languages, Language } from "../composition/useGame";
import { computed } from "vue";
import { SelectOption } from "../types";
import UiSelect from "./UiSelect.vue";

const props = defineProps<{
  settings: Settings;
}>();

const emit = defineEmits({
  change: (settings: Settings) => true,
});

const languageOptions = computed(() =>
  languages.map(
    (value) =>
      ({
        value,
        label: value,
      } as SelectOption)
  )
);

const changeTaskLanguage = (value: string) => {
  emit("change", {
    ...props.settings,
    taskLanguage: value as Language,
  });
};

const changeSolutionLanguage = (value: string) => {
  emit("change", {
    ...props.settings,
    solutionLanguage: value as Language,
  });
};
</script>

<template>
  <div class="app-settings">
    <label class="app-settings__row">
      Phrase lang:
      <UiSelect
        :model-value="settings.taskLanguage"
        :options="languageOptions"
        @update:model-value="changeTaskLanguage"
      />
    </label>
    <label class="app-settings__row">
      Translation:
      <UiSelect
        :model-value="settings.solutionLanguage"
        :options="languageOptions"
        @update:model-value="changeSolutionLanguage"
      />
    </label>
  </div>
</template>

<style scoped>
.app-settings {
  display: flex;
  flex-direction: column;
  align-items: end;
}

.app-settings__row:not(:last-child) {
  margin-bottom: 5px;
}
</style>
