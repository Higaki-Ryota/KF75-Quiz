<template>
    <div class="score">
      <span class="correct">最終結果：</span>
      <span class="bunshi"
        ><span class="correctcount">{{ correctCount }}</span
        >問正解</span
      >
    </div>
  </template>
  
  <script setup lang="ts">
    type Props = {
      correctCount: number;
    };
    const props = defineProps<Props>();
  </script>
  
  <style scoped lang="scss">
    .score{
      display:flex;
      font-size:45px;
      padding:30px;
      justify-content: center;
    }
  </style>