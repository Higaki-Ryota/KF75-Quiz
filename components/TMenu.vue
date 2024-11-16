<template>
    <div>
        <a-menu-header></a-menu-header>
        <a-menu-text></a-menu-text>
        <o-menu-options @select="onPlay" :Levels=Levels></o-menu-options>
    </div>
</template>
<script setup lang="ts">
    type Props ={
        Levels:string[][];
    };
    const props = defineProps<Props>();
    type Emit = {
      (event:"select", level:number): void;
    };
    const emit = defineEmits<Emit>();
    const onPlay = (index:number) => {
        emit("select", index)
    }
</script>