<template>

  <div>
    <div class="gallery">

      <div class="custom-row">

        <shop v-for="item in data.slice(0,10)"  :key="item.id" :shop="item"/>
<!--
        <div class="shop medium-shop">2</div>
        <div class="shop small-shop">3</div>
        <div class="shop medium-shop">4</div>
        <div class="shop x-small-shop">5</div>
        <div class="shop x-small-shop">6</div>
        <div class="shop big-shop">7</div>
        <div class="shop x-small-shop">8</div>
        <div class="shop x-small-shop">9</div>
        <div class="shop small-shop">10</div>-->
      </div>
      <div class="custom-row corridor">

      </div>
      <div class="custom-row">
        <shop v-for="item in data.slice(10,14)"  :key="item.id" :shop="item"/>
        <div class="vertical-corridor"></div>
        <shop v-for="item in data.slice(14,19)"  :key="item.id" :shop="item"/>
        <div class="vertical-corridor"></div>
        <shop v-for="item in data.slice(19,20)"  :key="item.id" :shop="item"/>

        <!-- <div class="shop medium-shop">11</div>
         <div class="shop medium-shop">12</div>
         <div class="shop small-shop">13</div>
         <div class="vertical-corridor"></div>
         <div class="shop medium-shop">14</div>
         <div class="shop small-shop">15</div>


        <div class="shop medium-shop">16</div>
        <div class="shop small-shop">17</div>
        <div class="shop x-small-shop">18</div>
        <div class="vertical-corridor"></div>

        <div class="shop x-small-shop">19</div>
        <div class="shop big-shop">20</div>-->
      </div>
      <div class="custom-row corridor">


      </div>
      <div class="custom-row">
          <shop v-for="item in data.slice(20,30)"  :key="item.id" :shop="item"/>


      <!--  <div class="shop medium-shop">21</div>
        <div class="shop big-shop">22</div>
        <div class="shop small-shop">23</div>
        <div class="shop medium-shop">24</div>
        <div class="shop x-small-shop">25</div>
        <div class="shop x-small-shop">26</div>
        <div class="shop medium-shop">27</div>
        <div class="shop medium-shop">28</div>
        <div class="shop small-shop">29</div>
        <div class="shop big-shop">30</div>
-->
      </div>
    </div>
  </div>
</template>

<script>
import shop from "@/components/shop";

export default {
  name: "ShoppingMall",
  components: {
    shop
  },
  props: {
    data: {
      type: Array
    }
  }
}
</script>

<style scoped>

.gallery {
  margin: 0 auto;
  margin-top: 50px;
  width: 70vw;
  height: 50vh;
  border: 5px solid black;
}

.custom-row {
  display: inline-flex;
  width: 100%;
  height: 25%;
}

.corridor {
  height: 11.5%;
}

.vertical-corridor {
  width: 10%;
}

.shop {
  height: 100%;
  border: 3px solid black;

  color: black;
  text-align: center;
}


.blank-spot {

  margin: auto 4vw;
  height: 3vw;
  width: 4vw;
  background: black;
}
</style>