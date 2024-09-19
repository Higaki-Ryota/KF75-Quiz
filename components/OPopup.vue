<template>
    <div class="background">
      <div class="popup">
        <slot />
      </div>
    </div>
  </template>
  
  <script setup lang="ts"></script>
  
  <style scoped lang="scss">
    // .background {
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    //   position: absolute;
    //   width: 100vw;
    //   height: 100vh;
    // }
    // .popup {
    //   position: relative;
    //   background-color: white;
    //   @include pc {
    //     width: 720px;
    //     height: 560px;
    //   }
    //   @include notpc {
    //     width: 300px;
    //     height: 500px;
    //   }
    // }
  </style>
  