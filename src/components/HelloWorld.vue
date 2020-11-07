<template>
  <div><!--
    <apexchart type="heatmap" height="350" :options="chartOptions" :series="series"></apexchart>
-->
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand href="#">Katarzyna Dudek, Monika Pacura</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <Timer class="timer" @synchronize="synchronizeData"/>
      </b-navbar-nav>
    </b-navbar>


    <ShoppingMall :data="sensors_data"/>

  </div>
</template>

<script>
import Timer from "./timer"
import ShoppingMall from "@/components/ShoppingMall";

export default {


  name: 'HelloWorld',
  props: {},
  components: {
    ShoppingMall,
     Timer
  },
  data: () => ({
    sensors_data: [],
  }),
  mounted() {
    this.synchronizeData()
  },
  methods: {
    synchronizeData ()  {
      console.log("synchronize")
      this.sensors_data = [
        {
          id: 1,
          ShopID: "s1",
          Date_n_Time: "2020-11-04 12:20:12",
          currentCapacity: 10,
          maxCapacity:400

        },
        {
          id: 2,
          ShopID: "s1",
          Date_n_Time: "2020-11-04 12:20:12",
          currentCapacity: 200,
          maxCapacity:260

        },
        {
          id: 3,
          ShopID: "s1",
          Date_n_Time: "2020-11-04 12:20:12",
          currentCapacity: 10,
          maxCapacity:130
        },
        {
          id: 4,
          ShopID: "s1",
          Date_n_Time: "2020-11-04 12:20:12",
          currentCapacity: 80,
          maxCapacity:260
        },
        {
          id: 5,
          ShopID: "s1",
          Date_n_Time: "2020-11-04 12:20:12",
          currentCapacity: 10,
          maxCapacity:60

        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.timer{

}
</style>
