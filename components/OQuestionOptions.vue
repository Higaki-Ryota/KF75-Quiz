<template>
    <div class="optionSet">
      <a-question-option v-for="i in 4" :key="i" :index="i - 1" :imageIndex="quizNumber * 4 + i" :color="backgroundColor[i-1]" :level="level" @click="emit('select', i)" class="option"/>
    </div>
  </template>
  
  <script setup lang="ts">

    type Props = {
      quizNumber: number;
      level:number;
    };
    type Emit = {
      (event: "select", index: number): void;
    };
    const props = defineProps<Props>();
    const emit = defineEmits<Emit>();
    const backgroundColor = ["#CC0033", "#555EBA", "#DD8D1F", "#5CAD42"];
    const ABCD = ["A", "B", "C", "D"];
  </script>
  
  <style scoped lang="scss">
    .optionSet{
      display:flex;
      flex-wrap:wrap;
      justify-content:space-between;
      width:100%;
    }
    .option{
      width:47.5%;
      margin-top:2.5%;
      margin-bottom:2.5%;
    }
  </style>