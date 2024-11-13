<template>
    <div class="level-position">
      <a-menu-option v-for="(option, i) in Levels" :key="i" :level="option" :color="backgroundColor[i]" @click="emit('select', i)" />
    </div>
</template>

<script setup lang="ts">
  type Props = {
    Levels:string[];
  };
  const props = defineProps<Props>();
  type Emit = {
      (event: "select", index: number): void;
    };
  const emit = defineEmits<Emit>();
  const backgroundColor = ["#CC0033", "#555EBA", "#DD8D1F", "#5CAD42"];
</script>
  
  <style scoped lang="scss">
  .level-position{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  </style>