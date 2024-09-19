<template>
    <o-popup>
      <div class="answer-wrapper">
        <a-answer-header :result="answerState" />
        <a-answer-option :quiz-data="quizData" />
        <a-answer-description :description="quizData.description" />
        <a-answer-next-button :text="props.isFinal ? '結果へ' : '次へ'" @click="emit('select')" />
      </div>
    </o-popup>
  </template>
  
  <script setup lang="ts">
    import type { QuizData } from "../composables/quizData";
    type Props = {
      isFinal: boolean;
      answerState: "正解！" | "不正解" | "時間切れ";
      quizData: QuizData;
    };
    type Emit = {
      (event: "select"): void;
    };
    const props = defineProps<Props>();
    const emit = defineEmits<Emit>();
  </script>
  
  <style scoped lang="scss"></style>