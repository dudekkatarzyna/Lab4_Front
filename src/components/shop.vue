<template>
  <div @mouseover="showDetails(shop.ShopID)"
       @mouseleave="hideDetails(shop.ShopID)"
       @click="showDetailsCard(shop.ShopID)"
       :class="classObject" :id="shop.ShopID">


    <span class="details" :id="shop.ShopID" style="display: none">

    <i> {{ shop.Name }}</i>
    <br/>
      <b>{{ shop.CurrentCapacity }}/{{ shop.MaxCapacity }}</b>
    </span>


  </div>


</template>

<script>
import {EventBus} from '@/js/eventBus';

export default {
  name: "shop",
  computed: {
    classObject: function () {
      return {
        shop: true,
        'big-shop': (this.$props.shop.MaxCapacity > 260),
        'medium-shop': (this.$props.shop.MaxCapacity > 130 & this.$props.shop.MaxCapacity <= 260),
        'small-shop': (this.$props.shop.MaxCapacity > 60 & this.$props.shop.MaxCapacity <= 130),
        'x-small-shop': (this.$props.shop.MaxCapacity <= 60),
        'green': ((this.$props.shop.CurrentCapacity / this.$props.shop.MaxCapacity) < 0.25),
        'yellow': ((this.$props.shop.CurrentCapacity / this.$props.shop.MaxCapacity) < 0.50 & (this.$props.shop.CurrentCapacity / this.$props.shop.MaxCapacity) >= 0.25),
        'orange': ((this.$props.shop.CurrentCapacity / this.$props.shop.MaxCapacity) < 0.75 & (this.$props.shop.CurrentCapacity / this.$props.shop.MaxCapacity) >= 0.5),
        'red': ((this.$props.shop.CurrentCapacity / this.$props.shop.MaxCapacity) < 1 & (this.$props.shop.CurrentCapacity / this.$props.shop.MaxCapacity) >= 0.75),
        'purple': ((this.$props.shop.CurrentCapacity / this.$props.shop.MaxCapacity) === 1)
      }
    }
  },
  props: {
    shop: {
      ShopID: {
        type: Number
      },
      Name: {
        type: String
      },
      CurrentCapacity: {
        type: Number
      },
      MaxCapacity: {
        type: Number
      },
    }

  },
  methods: {
    showDetails(shopId) {
      console.log(document.getElementById(shopId))
      document.getElementById(shopId).firstChild.style.display = 'block'
      document.getElementById(shopId).style.opacity = '100%'

    }, showDetailsCard(shopId) {
      EventBus.$emit('showDetails', shopId)
    },
    hideDetails(shopId) {
      console.log(document.getElementById(shopId))
      document.getElementById(shopId).firstChild.style.display = 'none'
      document.getElementById(shopId).style.opacity = '70%'

    }
  }
}
</script>

<style>

.classObject {
  width: 100%;
}

.shop {
  cursor: pointer;;
  overflow: hidden;
  resize: none;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: medium;


  background: linear-gradient(135deg, transparent 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px),
  linear-gradient(225deg, transparent 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px) 0 64px;
  background-size: 64px 128px;

  opacity: 70%;
}

.green {
  background-color: green;
}

.yellow {
  background-color: yellow;
}

.orange {
  background-color: orange;
}

.red {
  background-color: red;
}

.purple {
  background-color: purple;

}

.x-small-shop {
  width: 5%;
}

.small-shop {
  width: 10%;
}

.medium-shop {
  width: 20%;
}

.big-shop {
  width: 30%;
}
</style>