<template>
    <o-popup>
      <div class="q-head">
        <a-question-header :index="quizIndex + 1" class="q-subhead1"/>
        <a-question-correct-number :correctNumber="correctNumber" :questionNumber="quizNumber" class="q-subhead2"></a-question-correct-number>
        <div class="timer-wrapper">
          <a-question-timer @timeout="timeout" :count="count" class="q-subhead1"/>
          <a-question-minus-5 class="minus-5" v-if="incorrectDisplay" />
        </div>
      </div>
      <div class="answer-black" v-if="answerDisplay"></div>
      <div class="question-wrapper">
        <a-question-text :question="question" class="text"/>
        <o-question-options :options="options" :fontSize="fontSize" @select="onSelected" class="option"/>
        <a-question-answer :answer="answer" :fontSize="fontSize" class="answer" v-if="answerDisplay"/>
        <a-question-circle class="circle" v-if="correctDisplay"/>
        <a-question-cross class="cross" v-if="incorrectDisplay"/>
      </div>
    </o-popup>
  </template>
  
  <script setup lang="ts">
  
    type Props = {
      count: number;
      correctNumber: number;
      // answerState: string;
      answerDisplay: boolean;
      correctDisplay: boolean;
      incorrectDisplay: boolean;
      // level:number;
      correctIndex: number;
      quizIndex: number;
      quizNumber: number;
      // answerIndex: number;
      question: string;
      options: string[];
      fontSize: string;
      answer: string;
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
  
  <style scoped lang="scss">
    .q-head{
      display: flex;
      justify-content: space-around;
      height:15vh;
      background-color: #10503F;
      color:white;
      font-size: 40px;
      align-items: center;
      z-index:2;
    }
    .q-subhead1{
      height:100%;
      width:33vw;
    }
    .q-subhead2{
      background-color:#519935;
      height:100%;
      width:33vw;
      display: frex;
      align-items:center;
    }
    .question-wrapper{
      width:600px;
      height:75vh;
      margin-top:5vh;
      margin-bottom:5vh;
      margin-right:auto;
      margin-left:auto;
      display:flex;
      flex-direction:column;
      position: relative;
    }
    .option{
      width:100%;
    }
    .answer{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index:2;
    }
    .answer-black{
      position: absolute;
      width:100%;
      height:85%;
      background-color:black;
      opacity:0.2;
      z-index:1;
    }
    .circle{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity:0.7;
    }
    .cross{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity:0.7;
    }
    .timer-wrapper{
      position: relative;
    }
    .minus-5{
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, 0);
    }
  </style>