<template>
  <div>


    <VueCountdown :time="30 * 1000">
      <template slot-scope="props">Synchronization in： {{ props.seconds }} seconds.
      </template>
    </VueCountdown>
    <button type="button" class="btn btn-secondary" :disabled="counting" @click="startCountdown">
      <countdown v-if="counting" :time="5000" @end="handleCountdownEnd">
        <template slot-scope="props">Fetch again {{ props.totalSeconds }} seconds later</template>
      </countdown>
      <span v-else>Fetch Verification Code</span>
    </button>

  </div>

</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown';

export default {
  name: "timer",
  data: () => ({
    counting: false

  }),
  components: {
    VueCountdown,
  },
  methods:{
    startCountdown:()=>{},
    handleCountdownEnd:()=>{}
  }
}
</script>

<style scoped>

</style>