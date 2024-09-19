<template>
    <div class="optionSet">
      <a-question-option v-for="(option, i) in quizData.options" :key="i" :index="i" :text="option" :color="backgroundColor[i]" @click="emit('select', i)" />
    </div>
  </template>
  
  <script setup lang="ts">
  import type { QuizData } from "../composables/quizData";

    type Props = {
      quizData: QuizData;
    };
    type Emit = {
      (event: "select", index: number): void;
    };
    const props = defineProps<Props>();
    const emit = defineEmits<Emit>();
    const backgroundColor = ["#CC0033", "#555EBA", "#DD8D1F", "#5CAD42"];
  </script>
  
  <style scoped lang="scss"></style>