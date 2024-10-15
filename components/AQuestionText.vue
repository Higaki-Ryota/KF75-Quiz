<template>
    <div class="question">
      <img :src="images[level+'-'+quizNumber+'-q.jpeg']" />
    </div>
  </template>
  
  <script setup lang="ts">
    import images from "@/lib/assets";

    type Props = {
      level:number;
      quizNumber:number;
    };
    const props = defineProps<Props>();
  </script>
  
  <style scoped lang="scss">
    img{
      height:100px;
    }
  </style>