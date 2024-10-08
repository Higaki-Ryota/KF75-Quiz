  <template>
    <div>
      <div class="answerState">{{ answerState }}</div>
      <div class="answer">答え：{{ ABCD[quizData.correctIndex] }}</div>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { QuizData } from "../composables/quizData";

    type Props = {
      answerState: string;
      answer: string;
      quizData: QuizData;
    };
    const props = defineProps<Props>();
    const ABCD = ["A", "B", "C", "D"];
  </script>
  
  <style scoped lang="scss"></style>