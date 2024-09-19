<template>
    <div :class="`option-wrapper color-${quizData.correctIndex}`">
      <div class="title">答え</div>
      <div class="option">
        <div class="abcd">{{ ABCD[quizData.correctIndex] }}</div>
        <div class="option-text">{{ quizData.options[quizData.correctIndex] }}</div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    import type { QuizData } from "../composables/quizData";
    
    type Props = {
      quizData: QuizData;
    };
    const props = defineProps<Props>();
  
    const ABCD = ["A", "B", "C", "D"];
    const colors = ["#cc0033", "#555eba", "#dd8d1f", "#5cad42"];
  </script>
  
  <style scoped lang="scss"></style>