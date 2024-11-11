<template>
    <div>
      <div class="option">
        <p>
          <span>{{ ABCD[index] }}</span
          >
        </p>
        <img :src="images[level+'-'+quizNumber+'-'+index+'.jpeg']" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    import images from "@/lib/assets";

    type Props = {
      index: number;
      color: string;
      level:number;
      quizNumber:number;
    };
    const props = defineProps<Props>();
  
    const ABCD = ["A", "B", "C", "D"];
  </script>
  <style scoped lang="scss">
    img{
      height:100px;
    }
  </style>