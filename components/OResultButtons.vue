<template>
    <div class="container">
      <a-result-play-again-button @select="emit('select')" />
      <!-- <a-result-back-to-start-button />
      <a-result-share-button :correct-count="correctCount" /> -->
    </div>
  </template>
  
  <script setup lang="ts">
    import type { QuizData } from "../composables/quizData";
    type Props = {
      correctCount: number;
    };
    const props = defineProps<Props>();
    type Emit = {
      (event: "select"): void;
    };
    const emit = defineEmits<Emit>();
  </script>
  
  <style scoped lang="scss"></style>