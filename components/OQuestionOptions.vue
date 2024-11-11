<template>
    <div class="optionSet">
      <a-question-option v-for="i in 4" :key="i" :index="i - 1" :color="backgroundColor[i-1]" :level="level" :quizNumber="quizNumber" @click="emit('select', i)" />
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
  </script>
  
  <style scoped lang="scss">
    .optionSet{
      display:flex;
    }
  </style>