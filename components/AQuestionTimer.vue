  <template>
    <div class="times">
      <div class="count">残り
      <span class="time">{{ count }}</span>
      秒</div>
    </div>
  </template>
  
  <script setup lang="ts">

  type Props ={
    count:number;
  };
  const props =defineProps<Props>();
  </script>

<style scoped lang="scss">
  .times{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>