<template>
  <div class="DeserveContainer">
    <header class="header">
      <van-icon name="wap-home-o" size="30" />
      <p>值得买</p>
      <div class="searchAndCart">
        <van-icon name="search" size="30" />
        <van-icon name="shopping-cart-o" size="30" />
      </div>
    </header>
    <main class="main">
      <div class="main-top">
        <img class="bg" src="./img/topic_title_bg.2373a140.png" alt />
        <img class="deserve" src="./img/adea4b88-3531-487f-8e8e-4293769fda49.png" alt />
        <span>严选生活</span>
      </div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <ul>
            <li>
              <img src="./img/0af27def-ac34-4177-95ad-8f1550831769.png" alt />
              <p>1</p>
            </li>
            <li>
              <img src="./img/0af27def-ac34-4177-95ad-8f1550831769.png" alt />
              <p>2</p>
            </li>
            <li>
              <img src="./img/0af27def-ac34-4177-95ad-8f1550831769.png" alt />
              <p>3</p>
            </li>
            <li>
              <img src="./img/0af27def-ac34-4177-95ad-8f1550831769.png" alt />
              <p>4</p>
            </li>
            <li>
              <img src="./img/0af27def-ac34-4177-95ad-8f1550831769.png" alt />
              <p>4</p>
            </li>
            <li>
              <img src="./img/0af27def-ac34-4177-95ad-8f1550831769.png" alt />
              <p>4</p>
            </li>
            <li>
              <img src="./img/0af27def-ac34-4177-95ad-8f1550831769.png" alt />
              <p>4</p>
            </li>
            <li>
              <img src="./img/0af27def-ac34-4177-95ad-8f1550831769.png" alt />
              <p>4</p>
            </li>
          </ul>
        </van-swipe-item>
        <van-swipe-item>21111</van-swipe-item>
        <van-swipe-item>31111</van-swipe-item>
        <van-swipe-item>4111</van-swipe-item>
      </van-swipe>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.DeserveContainer
  width 100%
  height 100%
  .header
    width 100%
    display flex
    width 90%
    height 50px
    justify-content space-between
    align-items center
    font-size 20px
    padding 0 18px 0 15px
  .main
    width 100%
    height 100%
    position relative
    .main-top
      width 100%
      height 100%
      .bg
        height 300px
      .deserve
        width 70px
        height 40px
        position absolute
        top 20px
        left 10px
      span
        color white
        font-size 18px
        position absolute
        top 30px
        left 80px
    .my-swipe
      width 100%
      position absolute
      height 250px
      top -30px
      background white
      ul
        display flex
        flex-wrap wrap
        li
          width 80px
          height 80px
</style>