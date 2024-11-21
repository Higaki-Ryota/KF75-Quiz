<template>
    <div>
      <a-background />
      <t-menu v-if="displayState === 'menu'" @select="onLevelSelected" :Levels=Levels></t-menu>
      <t-question v-else-if="displayState === 'question'" :count="count - incorrectCount*5" :correctIndex="quizData[quizLevel][shuffledNumber[quizLevel][quizIndex]]" :quizIndex="quizIndex" :quizNumber=shuffledNumber[quizLevel][quizIndex] :level="quizLevel" :correctNumber="correctCount" :answerState="answerState" :answerDisplay="answerDisplay" :answerIndex="shuffledNumber[quizLevel][quizIndex] * 4 + quizData[quizLevel][shuffledNumber[quizLevel][quizIndex]] + 1" :correctDisplay="correctDisplay" :incorrectDisplay="incorrectDisplay" @select="onSelected" @timeout="timeout" />
      <t-result v-else-if="displayState === 'result'" :correct-count="correctCount" :ranking="ranking_view" @select="playAgain" />
    </div>
  </template>
  
  <script setup lang="ts">
    import {ref} from 'vue'
    import {getRandomArray} from "../composables/utils";
    import {quizData} from "../composables/quizData";
  
    type DisplayState = "question" | "result" | "menu";
    const displayState = ref<DisplayState>("menu");
  
    const randomIndex = [Array.from({length: quizData[0].length}, (_,i) => i), Array.from({length: quizData[1].length}, (_,i) => i), Array.from({length: quizData[2].length}, (_,i) => i)]
    const shuffledNumber = ref([getRandomArray(randomIndex[0], 21), getRandomArray(randomIndex[1], 21), getRandomArray(randomIndex[2], 21)]);
  
    const quizLevel= ref(0);
    const Levels = [["初級", "（小中学生向け）", "制限時間：60秒"],["中級","（高校生向け）","制限時間：60秒"],["上級","（大学生向け）","制限時間：60秒"]];
    const ranking=ref([]);
    const ranking_view=ref([]);
    const onLevelSelected = (level:number) => {
      quizLevel.value = level;
      displayState.value = "question";
      shuffledNumber.value = [getRandomArray(randomIndex[0], 21), getRandomArray(randomIndex[1], 21), getRandomArray(randomIndex[2], 21)];
      count.value = 60;
      questionTime.value = Date.now();
      db.collection("kf75").where('level', '==',quizLevel.value ).get().then((docs) => {
        if (docs) {
          docs.forEach(doc => {ranking.value.push(doc.data())})
        }            
        // const playtime=new Date();
        // playtime.toString();
        // result.push({level:quizLevel.value,score:correctCount.value,when:playtime,color:"red"})
        // console.log(result);
      }).catch(error => {
      // error
      })
    }
  
    const quizIndex = ref(0);
    const correctCount = ref(0);
    const incorrectCount = ref(0);
    const answerState = ref<"正解！" | "不正解" >(null as any);
  
    const count=ref(6.000);
    const countdown = () => {
      setInterval(() => {
        if (displayState.value === "question" && count.value > 0) {
          count.value--;
        };
        if (count.value <= incorrectCount.value*5){//タイムアップ時の処理1
          displayState.value = "result"
          count.value = 60;
          }
      }, 1000);
    };
  
    onMounted(() => {
      countdown();
    })
  
    const answerDisplay = ref(false);
    const correctDisplay = ref(false);
    const incorrectDisplay = ref(false);
    const questionTime = ref(0);
    const answerTime = ref(0);
  
    const onSelected = (isCorrect: boolean) => {
      if (answerDisplay.value === false && count.value > 0) {
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
          if (count.value <= incorrectCount.value*5){//タイムアップ時の処理2
  
          displayState.value = "result"
          count.value = 60;
        };
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
    };
  
  
  
    const playAgain = () => {
      displayState.value = "menu";
      quizIndex.value = 0;
      correctCount.value = 0;
      incorrectCount.value = 0;
      shuffledNumber.value = [getRandomArray(randomIndex[0], 21), getRandomArray(randomIndex[1], 21), getRandomArray(randomIndex[2], 21)];
      ranking.value=[];
      ranking_view.value=[];
    };
  </script>