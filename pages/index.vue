<template>
  <div>
    <a-background />
    <t-menu v-if="displayState === 'menu'" @select="onLevelSelected" :Levels=Levels></t-menu>
    <t-question v-else-if="displayState === 'question'" :count="count - incorrectCount*5" :correctIndex="quizData[quizLevel][shuffledNumber[quizIndex]]" :quizIndex="quizIndex" :quizNumber=shuffledNumber[quizIndex] :level="quizLevel" :correctNumber="correctCount" :answerState="answerState" :answerDisplay="answerDisplay" @select="onSelected" @timeout="timeout" />
    <t-result v-else-if="displayState === 'result'" :correct-count="correctCount" @select="playAgain" />
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import {getRandomArray} from "../composables/utils";
  import {quizData} from "../composables/quizData";
  import { initializeApp } from "firebase/app";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/firestore';
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD1LeqIBFxE6wU2gE2xDTeSV_O4xTQSazw",
    authDomain: "kf75-8d355.firebaseapp.com",
    projectId: "kf75-8d355",
    storageBucket: "kf75-8d355.firebasestorage.app",
    messagingSenderId: "385498511746",
    appId: "1:385498511746:web:9fc5581c8479ac83abf79b"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  type DisplayState = "question" | "result" | "menu";
  const displayState = ref<DisplayState>("menu");

  const randomIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const shuffledNumber = ref(getRandomArray(randomIndex, 21));

  const quizLevel= ref(0);
  const Levels = ["小中学生向け", "高校生向け", "大学生以上向け"];
  const onLevelSelected = (level:number) => {
    quizLevel.value = level;
    displayState.value = "question";
    shuffledNumber.value = getRandomArray(randomIndex, 21);
    count.value = 60;
    questionTime.value = Date.now();
  }

  const quizIndex = ref(0);
  const correctCount = ref(0);
  const incorrectCount = ref(0);
  const answerState = ref<"正解！" | "不正解" >(null as any);

  const count=ref(60);
  const countdown = () => {
    setInterval(() => {
      if (displayState.value === "question" || count.value > 0) {
        count.value--;
      };
      if (count.value <= incorrectCount.value*5){
        displayState.value = "result"
        count.value = 60;
      };
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
        incorrectCount.value++;
        answerState.value = "不正解";
        if (count.value <= incorrectCount.value * 5){
          displayState.value = "result";
          count.value = 60;
        };
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


  const db = firebase.firestore()

  const playAgain = () => {
    const date = new Date();
    date.toString();
    db.collection("result").add({
      score: correctCount.value,
      when: date,
    })
    .then((doc) => {
      console.log(`追加成功`);
    })
    .catch((error) => {
      console.log(error);
    });
    displayState.value = "menu";
    quizIndex.value = 0;
    correctCount.value = 0;
    incorrectCount.value = 0;
    shuffledNumber.value = getRandomArray(randomIndex, 21);
  };
</script>