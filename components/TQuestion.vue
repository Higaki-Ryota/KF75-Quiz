<template>
    <o-popup>
      <a-question-header :index="index + 1" />
      <a-question-correct-number :correctNumber="correctNumber" :questionNumber="index"></a-question-correct-number>
      <a-question-timer @timeout="timeout" :count="count"/>
      <a-question-text :text="quizData.question" />
      <a-question-answer :answerState="answerState" :quiz-data="quizData" v-if="answerDisplay"/>
      <o-question-options :quiz-data="quizData" @select="onSelected" />
    </o-popup>
  </template>
  
  <script setup lang="ts">
    import type { QuizData } from "../composables/quizData";
  
    type Props = {
      quizData: QuizData;
      index: number;
      count: number;
      correctNumber: number;
      answerState: string;
      answerDisplay: boolean;
    };
    type Emit = {
      (event: "select", isCorrect: boolean): void;
      (event: "timeout"): void;
    };
    const props = defineProps<Props>();
    const emit = defineEmits<Emit>();
  
    const onSelected = (index: number) => {
      emit("select", index === props.quizData.correctIndex);
    };
  
    const timeout = () => {
      emit("timeout");
    };
  </script>
  
  <style scoped lang="scss"></style>