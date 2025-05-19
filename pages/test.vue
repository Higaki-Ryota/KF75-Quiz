<template>
    <div>
      <a-background />
      <t-menu v-if="displayState === 'menu'" @select="onLevelSelected" :Levels=Levels></t-menu>
      <t-question v-else-if="displayState === 'question'" :count="10000000" :correctIndex="quizData[quizLevel][quizIndex].answer" :quizIndex="quizIndex" :quizNumber=quizIndex :correctNumber="correctCount" :answerDisplay="answerDisplay" :correctDisplay="correctDisplay" :incorrectDisplay="incorrectDisplay" :question="quizData[quizLevel][quizIndex].question" :options="quizData[quizLevel][quizIndex].options" :fontSize="quizData[quizLevel][quizIndex].fontSize" :answer="quizData[quizLevel][quizIndex].options[quizData[quizLevel][quizIndex].answer]" @select="onSelected" @timeout="timeout" />
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
  
    const quizLevel= ref(0);
    const Levels = [["6級", "小中学生初級", "制限時間：60秒"],["5級","小中学生上級","制限時間：60秒"],["4級","高校生初級","制限時間：60秒"],["3級", "高校生上級", "制限時間：60秒"],["2級","大学生初級","制限時間：60秒"],["1級","大学生上級","制限時間：60秒"]];
    const onLevelSelected = (level:number) => {
      quizLevel.value = level;
      displayState.value = "question";
      questionTime.value = Date.now();
    }
  
    const quizIndex = ref(0);
    const correctCount = ref(0);
    const incorrectCount = ref(0);
    const answerState = ref<"正解！" | "不正解" >(null as any);
  
    const answerDisplay = ref(false);
    const correctDisplay = ref(false);
    const incorrectDisplay = ref(false);
    const questionTime = ref(0);
    const answerTime = ref(0);
  
    const onSelected = (isCorrect: boolean) => {
      if (answerDisplay.value === false) {
        answerTime.value = Date.now();
        answerDisplay.value = true;
        if (isCorrect) {
          correctCount.value++;
          answerState.value = "正解！";
          correctDisplay.value = true;
        } else {
          incorrectCount.value++;
          answerState.value = "不正解";
          incorrectDisplay.value = true;
        }
        if (answerTime.value < questionTime.value + 2000) {
          setTimeout(() => {
            quizIndex.value++;
            questionTime.value = Date.now();
            answerDisplay.value = false;
            correctDisplay.value = false;
            incorrectDisplay.value = false;
          }, 3000 + questionTime.value - answerTime.value);
        } else {
          setTimeout(() => {
            quizIndex.value++;
            questionTime.value = Date.now();
            answerDisplay.value = false;
            correctDisplay.value = false;
            incorrectDisplay.value = false;
          }, 1000);
        };
      };
      if(quizIndex.value>quizData[quizLevel.value].length){
        displayState.value = "result";
      }
    };
  
  
    const playAgain = () => {
      displayState.value = "menu";
      quizIndex.value = 0;
      correctCount.value = 0;
      incorrectCount.value = 0;
    };
</script>