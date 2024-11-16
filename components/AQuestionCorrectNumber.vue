  <template>
      <div class="collectNumber">
        <span>正解数：</span>
        <span>{{ correctNumber }}問</span>
      </div>
  </template>
  
  <script setup lang="ts">
    type Props = {
      correctNumber: number;
      questionNumber: number;
    };
    const props = defineProps<Props>();
  </script>
  <style scoped lang="scss">
  .collectNumber{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>