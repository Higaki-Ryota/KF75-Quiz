<template>
    <div class="question">
      {{ props.text }}
    </div>
  </template>
  
  <script setup lang="ts">
    type Props = {
      text: string;
    };
    const props = defineProps<Props>();
  </script>
  
  <style scoped lang="scss"></style>