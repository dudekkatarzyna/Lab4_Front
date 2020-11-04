<template>

  <div id="leafletMap">

  </div>
</template>

<script>
import * as L from "leaflet"


export default {
  name: "LeafletMap",
  components: {},
  props: {
    sensors_data: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    map: L.map
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

    console.log("sensors", this.$props.sensors_data)
    this.$_drawMarkers()

  },
  methods: {
    $_drawMarkers() {
      const markers = []
      this.$props.sensors_data.forEach(record => {
        const marker= L.marker(record.Location)

        marker.bindPopup(this.$_displayRecord(record));
        markers.push(marker);
      })
     // L.control.layers(null, markers).addTo(this.map);
      console.log(markers)
      const featureGroup = L.featureGroup(markers).addTo(this.map);
      console.log(featureGroup)
      this.map.fitBounds(featureGroup.getBounds());
    },
    $_displayRecord(record){
      let data=""
      Object.keys(record).forEach(key =>{
        data+=key+": "+record[key]+"<br>"
      })
      console.log(data)
      return data
    }
  }

}
</script>

<style scoped>
#leafletMap {
  height: 50vh;
  width: 100vw;
}
</style>