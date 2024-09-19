<template>
    <div class="button-wrapper">
      <div class="box3"></div>
      <div class="box2"></div>
      <div class="box1 header_font">{{ text }}</div>
    </div>
  </template>
  
  <script setup lang="ts">
    type Props = {
      text: string;
    };
    const props = defineProps<Props>();
  </script>
  
  <style scoped lang="scss"></style>