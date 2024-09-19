<template>
    <div :class="['header-wrapper', 'text2', resultToImage[result]]">
      <div class="header-text">{{ result }}</div>
    </div>
  </template>
  
  <script setup lang="ts">
    type Props = {
      result: "正解！" | "不正解" | "時間切れ";
    };
    const resultToImage = {
      "正解！": "correct",
      不正解: "incorrect",
      時間切れ: "time-up",
    } as const;
    const props = defineProps<Props>();
  </script>
  
  <style scoped lang="scss"></style>
  