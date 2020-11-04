<template>

  <div id="leafletMap">

  </div>
</template>

<script>
import * as L from "leaflet";
import 'leaflet/dist/leaflet.css';

export default {
  name: "LeafletMap",
  components: {},
  data: () => ({
    map:L.map
  }),
  mounted() {
    // eslint-disable-next-line no-unused-vars
    this.map = new L.map('leafletMap', {
      center: [51.505, -0.09],
      zoom: 10
    });
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    }
}
</script>

<style scoped>
#leafletMap {
  height: 50vh;
  width: 100vw;
}
</style>