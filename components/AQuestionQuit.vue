<template>
    <div class="quit-btn">
        やめる
    </div>
</template>

<script setup>
import { defineEmits } from 'vue'
</script>

<style scoped>
.quit-btn {
    background-color: #ffffff;
    color: #519935;
    border: 3px solid #000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    width:100px;
    height:100px;
    cursor: pointer;
    margin-top:50px;
    margin-right:50px;
}
</style>