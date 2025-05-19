<template>
    <div class="question">
      <KaTeXRenderer :expression="question" :displayMode="true" class="text"/>
    </div>
  </template>
  
  <script setup lang="ts">
    import images from "@/lib/assets";
    import KaTeXRenderer from "@/components/KaTeXRenderer.vue";

    type Props = {
      question: string;
    };
    const props = defineProps<Props>();
  </script>
  
  <style scoped lang="scss">
    .text {
      background-color: white;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size:20px;
    }
  </style>