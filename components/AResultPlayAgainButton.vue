<template>
    <div class="buttonSet">
      <div class="playagain_button">
        <div class="img"  @click="emit('select')"></div>
        <div class="text" @click="emit('select')">レベル選択に戻る</div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    type Emit = {
      (event: "select"): void;
    };
    const emit = defineEmits<Emit>();
  </script>
  
  <style scoped lang="scss">
    .buttonSet{
      display: flex;
      justify-content: center;
      padding: 30px;
    }
    .playagain_button{
      background: #10503F;
      width:400px;
      height:80px;
      font-size:40px;
      color:white;
      display:flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  </style>