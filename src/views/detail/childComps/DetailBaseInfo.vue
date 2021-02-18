<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>

    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>

    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>

    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" >
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .base-info {
    padding: 20px 6px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-title {
    color: #000;
    margin-bottom: 18px;
    text-indent: 1em;
  }
  .info-price {
    margin-bottom: 22px;
    position: relative;
  }
  .o-price {
    text-decoration: line-through;
  }
  .n-price {
    color: var(--color-high-text);
    font-size: 20px;
    margin-right: 10px;
  }
  .discount {
    background-color: var(--color-high-text);
    border-radius: 18px;
    font-size: 14px;
    padding: 4px 6px;
    color: #fff;
    margin-left: 8px;
    position: absolute;
    bottom: 6px;
  }
  .info-other {
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;
  }
  .info-service {
    display: flex;
    justify-content: space-around;
  }
  .info-service-item span {
    font-size: 12px;
    color: #222;
  }
  .info-service-item img {
    width: 14px;
    height: 14px;
    vertical-align: middle;
  }
</style>