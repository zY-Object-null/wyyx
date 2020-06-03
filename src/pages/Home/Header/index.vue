<template>
  <div class="Home-header">
    <a href="/" class="logo">
      <img src="../images/index/ia_10028.png" alt="" />
    </a>
    <van-search placeholder="搜索商品，共20008件好物" />
    <van-button color="red" plain size="mini">登录</van-button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.Home-header
  width 100%
  display flex
  align-items center
  background white
  position fixed
  top 0px
  z-index 9999
  .logo
    display block
    width 60px
    margin-left 10px
    img
      width 60px
      height 20px
</style>
