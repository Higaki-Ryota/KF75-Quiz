  <template>
    <div>
      <div class="count">残り
      <span class="time">{{ count }}</span>
      秒</div>
    </div>
  </template>
  
  <script setup lang="ts">
  import {ref, onMounted} from 'vue';

  type Props ={
    count:number;
  };
  const props =defineProps<Props>();

    // type Emit = {
    //   (event: "timeout"): void;
    // };
    // const emit = defineEmits<Emit>();

    // const count = ref(10);
    // const countdown = () => {
    //   if (count.value > 0) {
    //     count.value--;
    //   } else {
    //     clearInterval(timer);
    //     emit("timeout");
    //   }
    // };
    // const timer = setInterval(countdown, 1000);
    // const count = ref(10);

// const countdown = () => {
//   if (count.value > 0) {
//     count.value--;
//   } else {
//     clearInterval(timer);
//     emit("timeout");
//   }
// };

// let timer;

// onMounted(() => {
//   timer = setInterval(countdown, 1000);
// });
  </script>

<style scoped lang="scss"></style>