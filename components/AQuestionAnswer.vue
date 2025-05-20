  <template>
    <div>
      <div class= "wrapper">
        <!-- <div class="answerState">{{ answerState }}</div> -->
        <div class="answer">正解は</div>
        <ka-te-x-renderer
          :expression="answer"
          :displayMode="true"
          :class="fontSize"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    type Props = {
      answer: string;
      fontSize: string;
    };
    const props = defineProps<Props>();
  </script>
  
  <style scoped lang="scss">
    .wrapper{
      border:4px,solid,#519935;
      width:35vw;
      height:30vh;
      background-color: white;
      text-align:center;
      font-size:30px;
    }
    .answer{
      font-size: 30px;
      margin-top: 10px;
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