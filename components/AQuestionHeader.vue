<template>
  <div class="header">第 {{ index }} 問</div>
</template>

<script setup lang="ts">
  type Props = {
    index: number;
  };
  const props = defineProps<Props>();
</script>

<style scoped lang="scss"></style>