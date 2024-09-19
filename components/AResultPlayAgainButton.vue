<template>
    <div class="buttonSet">
      <div class="img"  @click="emit('select')"></div>
      <div class="text" @click="emit('select')">もう一度遊ぶ</div>
    </div>
  </template>
  
  <script setup lang="ts">
    type Emit = {
      (event: "select"): void;
    };
    const emit = defineEmits<Emit>();
  </script>
  
  <style scoped lang="scss"></style>