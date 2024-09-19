<template>
    <div class="button">
        <div class="text">{{level}}</div>
    </div>
</template>
<script setup lang="ts">
type Props = {
    level: string;
  };
  const props = defineProps<Props>();
</script>
<style scoped lang="scss"></style>