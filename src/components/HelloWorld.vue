<template>
  <div><!--
    <apexchart type="heatmap" height="350" :options="chartOptions" :series="series"></apexchart>
-->
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand href="#">Katarzyna Dudek, Monika Pacura</b-navbar-brand>
    </b-navbar>

    <b-tabs content-class="mt-3">
      <b-tab title="General" active>
        <Timer @synchronize="synchronizeData"/>
        <LeafletMap v-if="sensors_data.length!==0" :sensors_data="sensors_data"/>

      </b-tab>
      <b-tab title="Temperature"><p>Temperature</p></b-tab>
      <b-tab title="Humidity"><p>Humidity</p></b-tab>
      <b-tab title="Pollution"><p>Pollution</p></b-tab>
      <b-tab title="Location"><p>Location</p></b-tab>
    </b-tabs>


  </div>
</template>

<script>
import LeafletMap from './map'
import Timer from "./timer"

export default {


  name: 'HelloWorld',
  props: {},
  components: {
    LeafletMap, Timer
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
          SensorId: "s1",
          Date_n_Time: "2020-11-04 12:20:12",
          Temperature: -39.21,
          Humidity: 51.48,
          Pollution: 15.88,
          Location: [50.06143, 19.93658],
          Radius:50
        },
        {
          id: 2,
          SensorId: "s1",
          Date_n_Time: "2020-11-04 12:20:12",
          Temperature: -39.21,
          Humidity: 51.48,
          Pollution: 15.88,
          Location: [50.06192, 19.93159],
          Radius: 100

        },
        {
          id: 3,
          SensorId: "s2",
          Date_n_Time: "2020-11-04 12:20:12",
          Temperature: -39.21,
          Humidity: 51.48,
          Pollution: 15.88,
          Location: [50.06340, 19.93250],
          Radius: 50
        },
        {
          id: 3,
          SensorId: "s2",
          Date_n_Time: "2020-11-04 12:20:12",
          Temperature: -39.21,
          Humidity: 51.48,
          Pollution: 30,
          Location: [50.06340, 19.93250],
          Radius: 50
        },
        {
          id: 4,
          SensorId: "s3",
          Date_n_Time: "2020-11-04 12:20:12",
          Temperature: -39.21,
          Humidity: 51.48,
          Pollution: 19.88,
          Location: [50.06143, 19.93352],
          Radius: 50

        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
