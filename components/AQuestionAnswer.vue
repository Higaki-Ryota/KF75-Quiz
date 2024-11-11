  <template>
    <div>
      <div class="answerState">{{ answerState }}</div>
      <div class="answer">答え：{{ ABCD[correctIndex] }}</div>
    </div>
  </template>
  
  <script setup lang="ts">

    type Props = {
      answerState: string;
      answer: string;
      correctIndex : number;
    };
    const props = defineProps<Props>();
    const ABCD = ["A", "B", "C", "D"];
  </script>
  
  <style scoped lang="scss"></style>