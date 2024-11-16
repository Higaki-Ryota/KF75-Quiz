<template>
    <div>
      <div class="option">
        <img :src="images[level+'-s-'+imageIndex+'.webp']" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    import images from "@/lib/assets";

    type Props = {
      index: number;
      color: string;
      level: number;
      imageIndex: number;
    };
    const props = defineProps<Props>();
  </script>
  <style scoped lang="scss">
    .option{
      cursor:pointer;
    }
    img{
      width:100%;
    }
  </style>