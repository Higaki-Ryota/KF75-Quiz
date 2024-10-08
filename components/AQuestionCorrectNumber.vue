  <template>
      <div>
        <span class="header">現在の正解数：</span>
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
  
  <style scoped lang="scss"></style>