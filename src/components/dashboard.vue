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


    <div class="page-body">
      <b-card bg-variant="light" style="width: 100%;">
        <b-card-title>
          Plan centrum handlowego
        </b-card-title>
        <b-card-text>

          <ShoppingMall class="shopping-mall" :data="sensors_data"/>
        </b-card-text>
      </b-card>


      <div style="width: 30%;">
        <b-card bg-variant="light" >
          <b-card-title>
            Statystyki
          </b-card-title>
          <b-card-body>
            <h5>Ostatnia synchronizacja</h5>
            {{ lastSync() }}
            <br>
            <br>
            <h5> Ilość osób w centrum</h5>
            {{ totalNumberOfPeople() }}
            <br>
            <br>
            <h5>Zapełnienie obiektu</h5>
            {{ currentCapacity() }}%
            <br>

          </b-card-body>

        </b-card>
        <ShopDetails :shopId="shopDetails"/>
      </div>


    </div>
    <b-card bg-variant="light">
      <b-card-title>
        Lista sklepów
      </b-card-title>

<b-card-body>
      <div class="shops-table">
        <b-list-group>
          <b-list-group-item :key="item" v-for="item in shopsList.slice(0,6)">{{ item }}</b-list-group-item>
        </b-list-group>
        <b-list-group>
          <b-list-group-item :key="item" v-for="item in shopsList.slice(6,12)">{{ item }}</b-list-group-item>
        </b-list-group>
        <b-list-group>
          <b-list-group-item :key="item" v-for="item in shopsList.slice(12,18)">{{ item }}</b-list-group-item>
        </b-list-group>
        <b-list-group>
          <b-list-group-item :key="item" v-for="item in shopsList.slice(18,24)">{{ item }}</b-list-group-item>
        </b-list-group>
        <b-list-group>
          <b-list-group-item :key="item" v-for="item in shopsList.slice(24,30)">{{ item }}</b-list-group-item>
        </b-list-group>
      </div>
</b-card-body>

    </b-card>
  </div>
</template>

<script>
import Timer from "./timer"
import ShoppingMall from "@/components/ShoppingMall";
import ShopDetails from "@/components/ShopDetails";
import {EventBus} from '@/js/eventBus';

export default {


  name: 'HelloWorld',
  props: {},
  components: {
    ShoppingMall,
    Timer, ShopDetails
  },
  data: () => ({
    sensors_data: [],
    last_sync: null,
    shopDetails: null,
    shopsList: []
  }),
  mounted() {
    this.synchronizeData()

    EventBus.$on('showDetails', shopID => {
      this.shopDetails = shopID
    });

    fetch("http://3.87.42.174:8080/GetShops", {
      headers: {
        'Access-Control-Allow-Origin': "*",
      }
    }).then(res => res.json()).then(res => {
      res.forEach(obj => {
        this.shopsList.push(obj.Name)
      })

    })
  },
  methods: {
    async synchronizeData() {
      console.log("synchronize")
      fetch("http://3.87.42.174:8080/GetAll", {
        headers: {
          'Access-Control-Allow-Origin': "*",
        }
      }).then(res => res.json()).then(res => {
        this.sensors_data = res
        this.last_sync = new Date()
      })
    },
    lastSync() {
      if (this.last_sync)
        return this.last_sync.toLocaleDateString() + " " + this.last_sync.toLocaleTimeString()
    },
    currentCapacity() {
      return Math.round((this.sensors_data.reduce((r, c) => r + c.CurrentCapacity, 0) / this.maxCapacity()) * 10000) / 100;

    },
    totalNumberOfPeople() {
      return this.sensors_data.reduce((n, {CurrentCapacity}) => n + CurrentCapacity, 0)

    },
    maxCapacity() {
      return this.sensors_data.reduce((n, {MaxCapacity}) => n + MaxCapacity, 0)

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.page-body {
  display: flex;
}

.card {
  margin: 30px;
}

.shops-table{
  display: flex;
}
.shopping-mall{
  padding-bottom: 56px;

}

.list-group{width: 100%}
</style>
