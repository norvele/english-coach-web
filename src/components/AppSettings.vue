<script setup lang="ts">
import { Settings, languages, Language, Verb } from "../common";
import { computed } from "vue";
import { SelectOption } from "../common";
import UiSelect from "./UiSelect.vue";
import UiCheckbox from "./UiCheckbox.vue";

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

const availableVerbs = Object.values(Verb);
const changeVerb = (verb: Verb, value: boolean) => {
  const currentVerbs = props.settings.usedVerbs;
  const newVerbs = value
    ? [...currentVerbs, verb]
    : currentVerbs.filter((v) => v !== verb);
  console.log(verb, value, newVerbs);
  emit("change", {
    ...props.settings,
    usedVerbs: newVerbs,
  });
};
const verbIsUsed = (verb: Verb) => {
  return props.settings.usedVerbs.includes(verb);
};
</script>

<template>
  <div class="app-settings">
    <div class="selects">
      <label class="selects__row">
        Phrase lang:
        <UiSelect
          :model-value="settings.taskLanguage"
          :options="languageOptions"
          @update:model-value="changeTaskLanguage"
        />
      </label>
      <label class="selects__row">
        Translation:
        <UiSelect
          :model-value="settings.solutionLanguage"
          :options="languageOptions"
          @update:model-value="changeSolutionLanguage"
        />
      </label>
    </div>
    <div>
      <UiCheckbox
        v-for="verb in availableVerbs"
        :key="verb"
        :label="verb"
        :model-value="verbIsUsed(verb)"
        @update:model-value="changeVerb(verb, $event)"
      />
    </div>
  </div>
</template>

<style scoped>
.selects {
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-bottom: 5px;
}

.selects__row:not(:last-child) {
  margin-bottom: 5px;
}
</style>
