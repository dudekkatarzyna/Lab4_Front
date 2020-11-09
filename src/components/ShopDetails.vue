<template>
  <b-card bg-variant="light" v-if="shopId">
    <b-card-title>
      Sklep {{shopId}}
    </b-card-title>
    <b-card-body>
      <h5>Nazwa</h5>
      {{shop[0].Name}}
      <br>
      <br>
      <h5>Maksymalna pojemność</h5>
      {{shop[0].MaxCapacity}}
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "shopDetails",
  props: [
    'shopId'
  ],
  data:()=>({
    shop:null
  }),
  watch:{
    'shopId':function (){
        fetch("http://3.87.42.174:8080/Shop/"+this.$props.shopId, {
        headers: {
          'Access-Control-Allow-Origin': "*",
        }
      }).then(res => res.json()).then(res => {
        this.shop=res
      })
    }
  },
  mounted() {


  }
}
</script>

<style scoped>

</style>