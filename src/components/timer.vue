<template>
  <div>


    <VueCountdown id="countdown" :time="time">
      <template slot-scope="props">Sync in：{{ props.seconds }} seconds.
      </template>
    </VueCountdown>
    <button type="button" class="btn btn-secondary" :disabled="counting" @click="forceSync">
      <VueCountdown v-if="counting" :time="5000" @end="handleCountdownEnd">
        <template slot-scope="props">Force sync in {{ props.totalSeconds }}s</template>
      </VueCountdown>
      <span v-else>Force sync</span>
    </button>

  </div>

</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown';

export default {
  name: "timer",
  data: () => ({
    counting: true,
    time: 30* 1000

  }),
  components: {
    VueCountdown,
  },
  methods: {
    forceSync: function () {

      this.counting = true;
    },
    handleCountdownEnd: function () {

      this.counting = false;
      this.time=30*1000

    },
  }
}
</script>

<style scoped>

span {
  color: white;
}
</style>