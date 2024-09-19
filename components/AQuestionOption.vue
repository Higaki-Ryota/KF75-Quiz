<template>
    <div>
      <div class="option">
        <p>
          <span>{{ ABCD[index] }}</span
          >{{ text }}
        </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    type Props = {
      index: number;
      text: string;
      color: string;
    };
    const props = defineProps<Props>();
  
    const ABCD = ["A", "B", "C", "D"];
  </script>
  <style scoped lang="scss"></style>