<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button" 
      :isChecked="isSelectAll"
      @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>
    <div class="price">合计:{{totalPrice}}</div>
     <div class="calculate" @click="calcClick">去结算:({{checkLength}})</div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
  export default {
    name:"CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      totalPrice(){
        return '￥'+this.$store.state.cartList.filter(item =>{
          return item.checked
        }).reduce((preValue, item) =>{
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },
      checkLength(){
        return this.$store.state.cartList.filter(item => item.checked).length
      },
      isSelectAll(){
        //方法一 性能不高
        // if(this.$store.state.cartList.length === 0) return false
        // return !(this.$store.state.cartList.filter(item => !item.checked).length)
        //方法二 性能稍微高一点
        if(this.$store.state.cartList.length === 0) return false
        return !this.$store.state.cartList.find(item => !item.checked)
      }
    },
    methods: {
      checkClick(){
        //如果原来都是选中,点击一次，全部不选中
        //如果原来都是不选中或某些不选中，点击一次全部选中
        if(this.isSelectAll){//全部选中
          this.$store.state.cartList.forEach(item => item.checked = false)
        }else{//全部不选中或某些不选中
          this.$store.state.cartList.forEach(item => item.checked = true)
        }
      },
      calcClick(){
        if(!this.isSelectAll){
          this.$toast.show('请选择购买的商品')
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    width: 100%;
    height: 38px;
    background-color: rgb(238, 235, 235);
    position: absolute;
    bottom: 49px;
    line-height: 38px;
    display: flex;
  }
  .check-content{
    display: flex;
    align-items: center;
  }
  .check-button{
    height: 20px;
    line-height: 18px;
    margin:0 3px 2px 0;
  }
  .price{
    margin-left: 10px;
    font-size: 15px;
  }
  .calculate{
    position: absolute;
    right: 0;
    background-color: rgb(250, 32, 32);
    color: #fff;
    padding: 0 5px;
  }
</style>