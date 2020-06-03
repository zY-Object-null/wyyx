<template>
  <van-tabbar class="foot" route>
    <van-tabbar-item replace to="/home"  icon="home-o">
      主页
    </van-tabbar-item>
    <van-tabbar-item
      replace
      to="/category/0"
      active-color="#DC143C"
      icon="apps-o"
    >
      分类
    </van-tabbar-item>
    <van-tabbar-item
      replace
      to="/deserve"
      active-color="#DC143C"
      icon="photo-o"
    >
      值得买
    </van-tabbar-item>
    <van-tabbar-item
      replace
      to="/shopcart"
      active-color="#DC143C"
      icon="shopping-cart-o"
    >
      购物车
    </van-tabbar-item>
    <van-tabbar-item replace to="/person" active-color="#DC143C" icon="contact">
      我的
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.foot
  z-index 9999
  .van-tabbar-item--active
    color red

</style>
