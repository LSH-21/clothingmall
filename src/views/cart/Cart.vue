<template>
  <div class="cart">
      <nav-bar class="nav-bar"><div slot="center">购物车({{length}}) </div></nav-bar>
      <!-- 商品列表 -->
      <cart-list></cart-list>
      <!-- 底部汇总 -->
      <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

import {mapGetters} from 'vuex'
  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      //mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性
      ...mapGetters({
        length:'cartLength'
      })
    }
  
  }
</script>

<style scoped>
  .cart{
    position: relative;
    height: 100vh;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
