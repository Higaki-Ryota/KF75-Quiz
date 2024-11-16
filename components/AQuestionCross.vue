<template>
    <div class="cross-wrapper">
        <div class="cross1"></div>
        <div class="cross2"></div>
    </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
    .cross-wrapper{
        position:relative;
    }
    .cross1{
        width:50px;
        height:500px;
        background-color:#1010FF;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
    }
    .cross2{
        width:50px;
        height:500px;
        background-color:#1010FF;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
    }
</style>