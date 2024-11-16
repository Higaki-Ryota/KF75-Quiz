  <template>
    <div>
      <div class= "wrapper">
        <!-- <div class="answerState">{{ answerState }}</div> -->
        <div class="answer">正解は</div>
        <img :src="images[level+'-s-'+answerIndex+'.webp']" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    import images from "@/lib/assets";

    type Props = {
      answerState: string;
      level : number;
      answerIndex : number;
    };
    const props = defineProps<Props>();
  </script>
  
  <style scoped lang="scss">
    .wrapper{
      border:4px,solid,#519935;
      width:35vw;
      height:24vh;
      background-color: white;
      text-align:center;
      font-size:30px;
    }
    img{
      height:15vh;
      margin-top:1vh;
    }
  </style>