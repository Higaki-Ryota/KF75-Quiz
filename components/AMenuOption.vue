<template>
    <div class="level_wrap">
        <div class="text">{{level[0]}}<br>{{level[1]}}<br>{{level[2]}}</div>
    </div>
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
    display:grid;
    place-content:center;
    font-size:30px;
    cursor:pointer;
}
</style>