<template>
  <div><!--
    <apexchart type="heatmap" height="350" :options="chartOptions" :series="series"></apexchart>
-->
    <Timer/>
    <LeafletMap/>
  </div>
</template>

<script>
import LeafletMap from './map'
import Timer from "./timer"
export default {


  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    LeafletMap,Timer
  },
  data: function () {
    return {

      series: [
        {
          name: "1",
          data: [{
            x: 1,
            y: 22
          }, {
            x: 2,
            y: 29
          }, {
            x: 3,
            y: 13
          }, {
            x: 4,
            y: 32
          }]
        },
        {
          name: "2",
          data: [{
            x: '1',
            y: 43
          }, {
            x: '2',
            y: 10
          }, {
            x: '3',
            y: 43
          }, {
            x: '4',
            y: 2
          }]
        }
      ],

      chartOptions: {
        chart: {
          height: 350,
          type: 'heatmap',
        },
        plotOptions: {
          heatmap: {
            shadeIntensity: 0.5,
            radius: 0,
            useFillColorAsStroke: true,
            colorScale: {
              ranges: [{
                from: 0,
                to: 1,
                name: 'low',
                color: '#00A100'
              },
                {
                  from: 2,
                  to: 4,
                  name: 'medium',
                  color: '#128FD9'
                },
                {
                  from: 5,
                  to: 7,
                  name: 'high',
                  color: '#FFB200'
                },
                {
                  from: 8,
                  to: 20,
                  name: 'extreme',
                  color: '#FF0000'
                }
              ]
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 1
        },
        title: {
          text: 'HeatMap Chart with Color Range'
        },
      },


    }
  },
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
