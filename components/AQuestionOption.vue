<template>
    <div>
      <div class="option">
        <ka-te-x-renderer
          :expression="option"
          :displayMode="true"
          :class="fontSize"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">

    type Props = {
      option: string;
      fontSize: string;
    };
    const props = defineProps<Props>();
    </script>

  <style scoped lang="scss">
    .option{
      cursor:pointer;
      background-color: white;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .small {
      font-size: 20px;
    }
    .medium {
      font-size: 30px;
    }
    .big{
      font-size: 45px;
    }
  </style>