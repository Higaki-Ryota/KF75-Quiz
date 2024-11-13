<template>
    <div class="level_wrap">{{level}}</div>
</template>
<script setup lang="ts">
type Props = {
    level: string;
  };
  const props = defineProps<Props>();
</script>
<style scoped lang="scss">
.level_wrap{
    border:4px,solid,#519935;
    width:35vw;
    height:24vh;
    margin:20px 0 20px 0;
    background-color: white;
    text-align:center;
    font-size:30px;
}
</style>