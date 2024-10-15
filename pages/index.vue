<template>
  <div>
    <a-background />
    <t-menu v-if="displayState === 'menu'" @select="onLevelSelected" :Levels=Levels></t-menu>
    <t-question v-else-if="displayState === 'question'" :count="count" :correctIndex="quizData[quizLevel][shuffledNumber[quizIndex]]" :quizIndex="quizIndex" :quizNumber=shuffledNumber[quizIndex] :level="quizLevel" :correctNumber="correctCount" :answerState="answerState" :answerDisplay="answerDisplay" @select="onSelected" @timeout="timeout" />
    <t-result v-else-if="displayState === 'result'" :correct-count="correctCount" @select="playAgain" />
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import {getRandomArray} from "../composables/utils";
  import {quizData} from "../composables/quizData";

  type DisplayState = "question" | "result" | "menu";
  const displayState = ref<DisplayState>("menu");

  const randomIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const shuffledNumber = ref(getRandomArray(randomIndex, 21));

  const quizLevel= ref(0);
  const Levels = ["初級", "中級", "上級"];
  const onLevelSelected = (level:number) => {
    quizLevel.value = level;
    displayState.value = "question";
    shuffledNumber.value = getRandomArray(randomIndex, 21);
    count.value = 60;
    questionTime.value = Date.now();
    setTimeout(() => {displayState.value = "result"}, 60000);
  }

  const quizIndex = ref(0);
  const correctCount = ref(0);
  const answerState = ref<"正解！" | "不正解" >(null as any);

  const count=ref(60);
  const countdown = () => {
    setInterval(() => {
      if (count.value > 0) {
        count.value--;
      }
    }, 1000);
  };

  onMounted(() => {
    countdown();
  })

  const answerDisplay = ref(false);
  const questionTime = ref(0);
  const answerTime = ref(0);

  const onSelected = (isCorrect: boolean) => {
    if (answerDisplay.value === false && count.value > 0) {
      answerTime.value = Date.now();
      answerDisplay.value = true;
      if (isCorrect) {
        correctCount.value++;
        answerState.value = "正解！";
      } else {
        answerState.value = "不正解";
      }
      if (answerTime.value < questionTime.value + 2000) {
        setTimeout(() => {
          quizIndex.value++;
          questionTime.value = Date.now();
          answerDisplay.value = false;
        }, 3000 + questionTime.value - answerTime.value);
      } else {
        setTimeout(() => {
          quizIndex.value++;
          questionTime.value = Date.now();
          answerDisplay.value = false;
        }, 1000);
      };
    };
  };

  const playAgain = () => {
    displayState.value = "menu";
    quizIndex.value = 0;
    correctCount.value = 0;
    shuffledNumber.value = getRandomArray(randomIndex, 21);
  };
</script>