<template>
  <div>
    <a-background />
    <t-menu v-if="displayState === 'menu'" @select="onLevelSelected" :Levels=Levels></t-menu>
    <t-question v-else-if="displayState === 'question'" :quiz-data="shuffledQuizData[quizIndex]" :index="quizIndex" @select="onSelected" @timeout="timeout" />
    <t-answer v-else-if="displayState === 'answer'" :is-final="quizIndex === shuffledQuizData.length" :quiz-data="shuffledQuizData[quizIndex]" :answer-state="answerState" @select="onNext" />
    <t-result v-else-if="displayState === 'result'" :correct-count="correctCount" @select="playAgain" />
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import {getRandomArray} from "../composables/utils";
  import {quizData} from "../composables/quizData";

  type DisplayState = "question" | "answer" | "result" | "menu";
  const displayState = ref<DisplayState>("menu");

  const quizLevel= ref(0);
  const Levels = ["初級", "中級", "上級"];
  const onLevelSelected = (level:number) => {
    quizLevel.value = level;
    displayState.value = "question";
    shuffledQuizData.value = getRandomArray(quizData[quizLevel.value], 10)
  }

  const quizIndex = ref(0);
  const correctCount = ref(0);
  const shuffledQuizData = ref(getRandomArray(quizData[quizLevel.value], 10));
  const answerState = ref<"正解！" | "不正解" | "時間切れ">(null as any);

  const onSelected = (isCorrect: boolean) => {
    if (isCorrect) {
      correctCount.value++;
      answerState.value = "正解！";
    } else {
      answerState.value = "不正解";
    }
    displayState.value = "answer";
  };

  const timeout = () => {
    answerState.value = "時間切れ";
    displayState.value = "answer";
  };

  const onNext = () => {
    if (quizIndex.value === shuffledQuizData.value.length - 1) {
      displayState.value = "result";
    } else {
      quizIndex.value++;
      displayState.value = "question";
    }
  };

  const playAgain = () => {
    displayState.value = "menu";
    quizIndex.value = 0;
    correctCount.value = 0;
    shuffledQuizData.value = getRandomArray(quizData[quizLevel.value], 10);
  };
</script>