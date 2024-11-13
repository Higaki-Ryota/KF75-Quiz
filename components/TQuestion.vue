<template>
    <o-popup>
      <div class="q-head">
        <a-question-header :index="quizIndex + 1" class="q-subhead1"/>
        <a-question-correct-number :correctNumber="correctNumber" :questionNumber="quizNumber" class="q-subhead2"></a-question-correct-number>
        <a-question-timer @timeout="timeout" :count="count" class="q-subhead1"/>
      </div>
      <a-question-text :quizNumber="quizNumber" :level="level" />
      <a-question-answer :answerState="answerState" :correctIndex="correctIndex" v-if="answerDisplay"/>
      <o-question-options :quizNumber="quizNumber" :level="level" @select="onSelected" />
    </o-popup>
  </template>
  
  <script setup lang="ts">
  
    type Props = {
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
  
  <style scoped lang="scss">
    .q-head{
      display: flex;
      justify-content: space-around;
      height:15vh;
      background-color: #10503F;
      color:white;
      font-size: 40px;
      align-items: center;
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
  </style>