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
        const marker = L.marker(record.Location)
        const markerCircle = L.circle(record.Location, record.Radius, {
          color: this.$_getColor(record.SensorId)
        })

        marker.bindPopup(this.$_displayRecord(record));
        markerCircle.bindPopup(this.$_displayPollutionData(record))
        markers.push(marker);
        markers.push(markerCircle);
      })
      // L.control.layers(null, markers).addTo(this.map);
      console.log(markers)
      const featureGroup = L.featureGroup(markers).addTo(this.map);
      console.log(featureGroup)
      this.map.fitBounds(featureGroup.getBounds());
    },
    $_displayRecord(record) {
      let data = ""
      Object.keys(record).forEach(key => {
        data += key + ": " + record[key] + "<br>"
      })
      console.log(data)
      return data
    },
    $_getAvgPollution(sensorId) {
      let avg = 0;
      const sensorData = this.$props.sensors_data.filter(x => x.SensorId === sensorId)
      if (sensorData.length === 1) avg = sensorData[0].Pollution
      else
        avg = sensorData.reduce((a, v, i) => (a.Pollution * i + v.Pollution) / (i + 1));

      return avg

    },
    $_displayPollutionData(record) {
      return "Avg Pollution: " + this.$_getAvgPollution(record.SensorId) + "<br>"

    },
    $_getColor(sensorId) {
      const avg = this.$_getAvgPollution(sensorId)
      if (avg < 13)
        return "#00FF00"
      else if (avg < 26)
        return "#FFFF00"
      else if (avg < 39)
        return "#FF8C00"
      else if (avg < 52)
        return "#B22222"
      else
        return "#800080"
    }
  }

}
</script>

<style scoped>
#leafletMap {
  height: 50vh;
  width: 100vw;
  margin: 50px;
}
</style>