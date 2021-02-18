<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './CartListItem'

import {mapGetters} from 'vuex'
  export default {
    name:'CartList',
    computed: {
      ...mapGetters(['cartList'])
    },
    components: {
      Scroll,
      CartListItem
    },
    activated () {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cart-list{
    position: absolute;
    top: 44px;
    bottom: 87px;
    left: 0;
    right: 0;
  }
  .content {
    height: 100%;  
    overflow: hidden;   
  }
</style>