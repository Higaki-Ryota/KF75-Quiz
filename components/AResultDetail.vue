<template>
    <div>
      <span class="correct">正解数</span>
      <span class="bunshi"
        ><span class="correctcount">{{ correctCount }}</span
        >問</span
      >
      <span class="bunbo">/10問</span>
    </div>
  </template>
  
  <script setup lang="ts">
    type Props = {
      correctCount: number;
    };
    const props = defineProps<Props>();
  </script>
  
  <style scoped lang="scss"></style>