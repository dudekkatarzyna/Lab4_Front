<template>
  <div :class="classObject">


    id: {{ shop.id }}
    <br/>
    nazwa: {{ shop.name }}
    <br/>
    {{ shop.currentCapacity }}/{{ shop.maxCapacity }}

  </div>
</template>

<script>
export default {
  name: "shop",
  computed:{
    classObject:function (){
      return{
        shop:true,
        'big-shop':(this.$props.shop.maxCapacity>260),
        'medium-shop':(this.$props.shop.maxCapacity>130 & this.$props.shop.maxCapacity<260),
        'small-shop': (this.$props.shop.maxCapacity>60 & this.$props.shop.maxCapacity<130),
        'x-small-shop': (this.$props.shop.maxCapacity<=60),
        'green':((this.$props.shop.currentCapacity/this.$props.shop.maxCapacity)<0.25),
        'yellow':((this.$props.shop.currentCapacity/this.$props.shop.maxCapacity)<0.50 & (this.$props.shop.currentCapacity/this.$props.shop.maxCapacity)>=0.25),
        'orange':((this.$props.shop.currentCapacity/this.$props.shop.maxCapacity)<0.75 & (this.$props.shop.currentCapacity/this.$props.shop.maxCapacity)>=0.5),
        'red':((this.$props.shop.currentCapacity/this.$props.shop.maxCapacity)>=0.75)
      }
    }
  },
  props: {
    shop: {
      id: {
        type: Number
      },
      name: {
        type: String
      },
      currentCapacity: {
        type: Number
      },
      maxCapacity: {
        type: Number
      },
    }

  }
}
</script>

<style>

.shop {
  display: flex;
  justify-content: center;
  align-items: center;
}

.green{
  background: green;
}
.yellow{
  background: yellow;
}
.orange{
  background: orange;
}
.red{
  background: red;
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