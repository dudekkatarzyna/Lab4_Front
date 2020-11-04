import Vue from 'vue'
import App from './App.vue'
import heatmap from 'vue-heatmapjs'

Vue.config.productionTip = false
Vue.use(heatmap,{
  heatmapPreload: [{ x: 10, y: 10, value: 100 }],

})

new Vue({
  render: h => h(App),
}).$mount('#app')
