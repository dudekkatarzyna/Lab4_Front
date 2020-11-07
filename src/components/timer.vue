<template>
  <div>


    <div id="countdown">
      <span>Sync in：{{ countdown }} seconds.
      </span>
    </div>
    <button type="button" class="btn btn-secondary" @click="forceSync">
      Force sync
    </button>

  </div>

</template>

<script>

export default {
  name: "timer",
  data: () => ({
    counting: true,
    countdown: 30

  }),
  components: {},
  mounted() {
    this.countDownTimer()

  },
  watch: {
    'countdown': function (val) {
      if (val === 0) {
        this.forceSync()
        this.countDownTimer()

      }
    }
  },
  methods: {
    forceSync: function () {
      this.countdown = 30;



    },
    countDownTimer() {
      if (this.countdown > 0) {
        setTimeout(() => {
          this.countdown -= 1
          this.countDownTimer()
        }, 1000)
      }
    },
  }
}
</script>

<style scoped>

span {
  color: white;
}
</style>