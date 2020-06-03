<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>
    <a href="#JacaScript">
      <img src="../../pages/Home/images/index/ia_10076.jpg" alt="">
    </a>
  </van-swipe-item>
    <van-swipe-item>
    <a href="#JacaScript">
      <img src="../../pages/Home/images/index/ia_10077.jpg" alt="">
    </a>
  </van-swipe-item>  <van-swipe-item>
    <a href="#JacaScript">
      <img src="../../pages/Home/images/index/ia_10078.jpg" alt="">
    </a>
  </van-swipe-item>  <van-swipe-item>
    <a href="#JacaScript">
      <img src="../../pages/Home/images/index/ia_10079.jpg" alt="">
    </a>
  </van-swipe-item>  <van-swipe-item>
    <a href="#JacaScript">
      <img src="../../pages/Home/images/index/ia_10080.jpg" alt="">
    </a>
  </van-swipe-item>  <van-swipe-item>
    <a href="#JacaScript">
      <img src="../../pages/Home/images/index/ia_10081.jpg" alt="">
    </a>
  </van-swipe-item>  <van-swipe-item>
    <a href="#JacaScript">
      <img src="../../pages/Home/images/index/ia_10082.jpg" alt="">
    </a>
  </van-swipe-item>  <van-swipe-item>
    <a href="#JacaScript">
      <img src="../../pages/Home/images/index/ia_10083.jpg" alt="">
    </a>
  </van-swipe-item>
</van-swipe>


</template>

<script>
export default {
  name:"Swipe",

}
</script>

<style>
  .my-swipe{
    margin-top:95px;
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    width: 100%;
    height:150px;
  }
  img{
    width: 100%;
    height: 150px;
  }
</style>