<template>
  <div>
    <a-background />
    <t-menu v-if="displayState === 'menu'" @select="onLevelSelected" :Levels=Levels></t-menu>
    <t-question v-else-if="displayState === 'question' || displayState === 'answer'" :count="count" :quiz-data="shuffledQuizData[quizIndex]" :index="quizIndex" :correctNumber="correctCount" :answerState="answerState" :answerDisplay="answerDisplay" @select="onSelected" @timeout="timeout" />
    <!-- <t-answer v-else-if="displayState === 'answer'" :is-final="quizIndex === shuffledQuizData.length" :quiz-data="shuffledQuizData[quizIndex]" :answer-state="answerState" @select="onNext" /> -->
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
  import 'firebase/firestore';
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

  const quizLevel= ref(0);
  const Levels = ["初級", "中級", "上級"];
  const onLevelSelected = (level:number) => {
    quizLevel.value = level;
    displayState.value = "question";
    shuffledQuizData.value = getRandomArray(quizData[quizLevel.value], 21)
    count.value = 60;
    questionTime.value = Date.now();
    setTimeout(() => {displayState.value = "result"}, 60000);
  }

  const quizIndex = ref(0);
  const correctCount = ref(0);
  const shuffledQuizData = ref(getRandomArray(quizData[quizLevel.value], 21));
  const answerState = ref<"正解！" | "不正解" | "時間切れ">(null as any);

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
  // const countdown = () => {
  //   if (count.value > 0) {
  //     count.value--;
  //   } else {
  //     clearInterval(timer);
  //     // emit("timeout");
  //   }
  // };

  // let timer;

  // const timer = () => {
  //   setInterval(countdown, 1000);
  // }

  // onMounted(() => {
  //   timer = setInterval(countdown, 1000);
  // });

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

  // const timeout = () => {
  //   answerState.value = "時間切れ";
  //   displayState.value = "answer";
  // };

  // const onNext = () => {
  //   if (quizIndex.value === shuffledQuizData.value.length - 1) {
  //     displayState.value = "result";
  //   } else {
  //     quizIndex.value++;
  //     displayState.value = "question";
  //   }
  // };
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
    shuffledQuizData.value = getRandomArray(quizData[quizLevel.value], 21);
  };
</script>