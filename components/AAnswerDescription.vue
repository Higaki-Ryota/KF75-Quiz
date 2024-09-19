<template>
    <div class="description-wrapper text5">
      <div class="description">{{ description }}</div>
    </div>
  </template>
  
  <script setup lang="ts">
  import {ref} from 'vue';
  
    type Props = {
      description: string;
    };
    const props = defineProps<Props>();
  </script>
  
  <style scoped lang="scss"></style>