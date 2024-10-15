<template>
    <o-popup>
      <a-question-header :index="quizIndex + 1" />
      <a-question-correct-number :correctNumber="correctNumber" :questionNumber="quizNumber"></a-question-correct-number>
      <a-question-timer @timeout="timeout" :count="count"/>
      <a-question-text :quizNumber="quizNumber" :level="level" />
      <a-question-answer :answerState="answerState" :correctIndex="correctIndex" v-if="answerDisplay"/>
      <o-question-options :quizNumber="quizNumber" :level="level" @select="onSelected" />
    </o-popup>
  </template>
  
  <script setup lang="ts">
    // import type { QuizData } from "../composables/quizData";
  
    type Props = {
      // quizData: QuizData;
      // index: number;
      count: number;
      correctNumber: number;
      answerState: string;
      answerDisplay: boolean;
      level:number;
      correctIndex: number;
      quizIndex: number;
      quizNumber: number;
    };
    type Emit = {
      (event: "select", isCorrect: boolean): void;
      (event: "timeout"): void;
    };
    const props = defineProps<Props>();
    const emit = defineEmits<Emit>();
  
    const onSelected = (index: number) => {
      emit("select", index === props.correctIndex + 1);
    };
  
    const timeout = () => {
      emit("timeout");
    };
  </script>
  
  <style scoped lang="scss"></style>