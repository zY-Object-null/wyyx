<template>
  <div class="homeContainer">
    <div class="fix">
      <a href="#header">
        <img class="fiximg" src="./images/12.jpg" alt="" />
      </a>
    </div>
    <div class="gotoTOP" v-if="bn" @click="gotoTOP">
      <a href="#JavaScript">
        <van-icon class="up" name="arrow-up" />
      </a>
    </div>
    <Header />
    <Nav />
    <MySwipe />
    <div class="guarantee ">
      <ul>
        <li>
          <img src="./images/index/ia_10031.png" alt="" />
          <p>网易自营品牌</p>
        </li>
        <li>
          <img src="./images/index/ia_10032.png" alt="" />
          <p>网易自营品牌</p>
        </li>
        <li>
          <img src="./images/index/ia_10033.png" alt="" />
          <p>网易自营品牌</p>
        </li>
      </ul>
    </div>
    <div class="category">
      <ul>
        <li
          v-for="(t, i) in kingKongModule.kingKongList"
          :key="i"
          :style="{ background: t.background }"
        >
          <img :src="t.picUrl" alt="" />
          <p>{{ t.text }}</p>
        </li>
      </ul>
    </div>
    <div class="body">
      <div class="indexBigPromotionModule">
        <div class="PromItem-1">
          <a href="">
            <img src="./images/index/ia_10050.png" alt="" />
          </a>
        </div>
        <div class="PromItem-2">
          <a href="">
            <img src="./images/index/ia_100000060.png" alt="" />
          </a>
        </div>
        <div class="PromItem-3">
          <img src="./images/index/ia_100000061.png" alt="" />
          <img src="./images/index/ia_100000062.png" alt="" />
          <img src="./images/index/ia_100000063.png" alt="" />
        </div>
      </div>
      <div class="freshmanModule">
        <p class="title">- 新人专享礼 -</p>
        <div class="content">
          <div class="left">
            <p>新人专享礼包</p>
            <img src="./images/index/ia_100000593.png" alt="" />
          </div>
          <div class="right-top">
            <p>福利社</p>
            <p>今日特价</p>
            <img src="./images/index/ia_10010.png" alt="" />
          </div>
          <div class="right-bootom">
            <p>福利社</p>
            <p>今日特价</p>
            <img src="./images/index/ia_10010.png" alt="" />
          </div>
        </div>
      </div>
      <div class="categoryHot">
        <p class="title">{{ categoryHotSellModule.title }}</p>
        <div class="Imgs">
          <div
            :class="i <= 1 ? 'big' : 'small'"
            v-for="(h, i) in categoryHotSellModule.categoryList"
            :key="i"
          >
            <p>{{ h.categoryName }}</p>
            <img :src="h.picUrl" alt="" />
          </div>
        </div>
      </div>
      <div class="flashSaleModule">
        <div class="header">
          <p class="title">限时购</p>
          <div class="time">
            <span>{{ this.s }}</span>
            <p>:</p>
            <span>{{ this.f }}</span>
            <p>:</p>
            <span>{{ this.m }}</span>
          </div>
          <a class="more">更多 ></a>
        </div>
        <div class="flashSaleList">
          <div v-for="(f, i) in flashSaleModule.itemList" :key="i">
            <div class="item">
              <img :src="f.picUrl" alt="" />
            </div>
            <div class="price">
              <span class="newPrice">￥{{ f.activityPrice }}</span>
              <span class="oldPrice">￥{{ f.originPrice }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import Nav from "./Nav";
import { reqBigPromotionModule } from "../../api/index";
import { clearInterval, setInterval } from 'timers';
export default {
  name: "Home",
  data() {
    return {
      bigPromotionModule: {},
      categoryHotSellModule: {},
      flashSaleModule: {},
      kingKongModule: {},
      hotBigCls: "big",
      hotSmlCls: "small",
      nowTime: "", //当前时间
      endTime: new Date("2020/7/1").getTime(), //结束时间
      countTime: 0, //剩余时间
      s: 0, //时
      f: 0, //分
      m: 0, //秒
      time: "",
      bn: false,
    };
  },
  methods: {
    showTime() {
      this.nowTime = new Date().getTime();
      this.countTime = this.endTime - this.nowTime; //获取剩余时间
      this.s = Math.floor(this.countTime / 3600 / 1000); //计算剩余小时
      this.f = Math.floor((this.countTime / (1000 * 60)) % 60); //计算剩余分钟
      this.m = Math.floor((this.countTime / 1000) % 60); //计算剩余秒数
      this.m = this.m >= 10 ? this.m : "0" + this.m;
      this.s = this.s >= 10 ? this.s : "0" + this.s;
      this.f = this.f >= 10 ? this.f : "0" + this.f;
      if (this.endTime - this.nowTime <= 0) {
        this.s = "00";
        this.f = "00";
        this.m = "00";
        return;
      }
      setInterval(() => {
        this.showTime();
      }, 1000);
    },
    gotoTOP() {
      let timer = setInterval(() => {
        document.documentElement.scrollTop =
          document.documentElement.scrollTop - 100;
        if (document.documentElement.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 10);
    },
    scrollToTop() {
      this.$nextTick(()=>{
        let This = this;
        let scrollY = document.documentElement.scrollTop;
        This.scrollTop = scrollY;
        if (This.scrollTop > 200) {
          This.bn = true;
        } else {
          This.bn = false;
        }
      })

    },
  },
  computed: {},
  components: {
    Header,
    Nav,
  },
  mounted() {
    reqBigPromotionModule().then((result) => {
      this.bigPromotionModule = result.data.bigPromotionModule;
      this.kingKongModule = result.data.kingKongModule;
      this.categoryHotSellModule = result.data.categoryHotSellModule;
      this.flashSaleModule = result.data.flashSaleModule;
    });
    this.showTime();
    window.addEventListener("scroll", this.scrollToTop, true);
  },
};
</script>

<style lang="stylus">
html
  width 100%
  height 100%
  body
    width 100%
    height 100%
    touch-action: pan-y
    .homeContainer
      width 100%
      height 100%
      overflow auto
      .aa
        width 100%
        height 100%
      .fix
        position fixed
        bottom 120px
        right 0
        width 80px
        height 40px
        background white
        border-radius 20px 0 0 20px
        z-index 9999
        .fiximg
          width 40px
          height 30px
          margin-left 20px
          margin-top 5px
      .gotoTOP
        position fixed
        bottom 80px
        right 0
        width 40px
        height 40px
        background white
        border-radius 20px 0 0 20px
        z-index 9999
        .up
          margin 14px 0 0 12px
    .body
      background 	#F5F5F5
    .guarantee
      width 100%
      margin-top 8px
      ul
        display flex
        li
          width 33%
          text-align center
          font-size 12px
          display flex
          align-items center
          justify-content center
          img
            width 20px
            height 20px
    .category
      ul
        display flex
        flex-wrap wrap
        li
          width 20%
          display flex
          flex-direction column
          align-items center
          img
            width 60px
            height 60px
          p
            font-size 12px
    .indexBigPromotionModule
      display flex
      flex-direction column
      width 90%
      position relative
      padding 0 18px 25px 18px
      .PromItem-1
        a
          display block
          width 100%
          height 110px
          background url('./images/index/ia_10035.png') 0% 0% /100% 100% rgb(255,255,255)
          img
            width 100px
            height 100px
            position relative
            left 30px
      .PromItem-2
        margin-top 10px
        width 100%
        height 100%
        img
          width 100%
      .PromItem-3
        display flex
        widows 100%
      img
        width 110px
        height 110px
        margin-right 7px
    .freshmanModule
      overflow hidden
      padding 0 20px
      .title
        text-align center
        font-size 20px
      .content
        .left
          float left
          width 160px
          height  216px
          background  #F9E9CF;
          margin-right 8px
          p
            font-size 16px
            margin 20px 0 0 10px
          img
            width 130px
            height 120px
            margin 20px  15px 0
        .right-top
          float left
          width 160px
          height 106px
          background #f4e1d3
          margin-bottom 4px
          position relative
          p
            font-size 16px
            margin 20px 0 0 10px
          img
            position absolute
            top 20px
            right 20px
            width 50px
            height 50px
        .right-bootom
          float left
          width 160px
          height 106px
          background #faebc3
          position relative
          p
            font-size 16px
            margin 20px 0 0 10px
          img
            position absolute
            top 20px
            right 20px
            width 50px
            height 50px
    .categoryHot
      margin-top 20px
      padding 20px
      background #ffffff
      .title
        font-size 24px
      .Imgs
        display flex
        flex-wrap wrap
        justify-content space-around
        .big
          width 160px
          height 100px
          display flex
          justify-content space-around
          align-items center
          background #f7f3e4
          margin-bottom 10px
          p
          font-size 16px
          img
            width 40px
            height 40px
        .small
          width 80px
          height 100px
          background #f5f5f5
          display flex
          flex-direction column
          align-items center
          justify-content space-around
          margin-bottom 10px
          p
            font-size 12px
          img
            width 40px
            height 40px
    .flashSaleModule
      margin-top 20px
      padding 20px
      background #ffffff
      .header
        display flex
        align-items center
        width 100%
        font-size 20px
        .title
          margin 10px
        .time
          display flex
          width 100px
          justify-content space-between
          align-items center
          span
            display inline-block
            width 20px
            height 20px
            color white
            text-align center
            background black
            line-height 20px
            font-size 12px
        .more
          position relative
          left 80px
      .flashSaleList
        display flex
        flex-wrap wrap
        justify-content space-around
        margin-bottom 40px
        .item
          width 100px
          height 100px
          background  #f5f5f5
          position relative
          margin-bottom 10px
        img
          width 80px
          height 80px
          position absolute
          top 0
          left 0
          right 0
          bottom 0
          margin auto
        .price
          .newPrice
            color red
            font-size 14px
            margin-right 2px
          .oldPrice
            color #cccccc
            font-size 12px
            text-decoration line-through
</style>
