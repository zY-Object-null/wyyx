<template>
  <div class="homeContainer">
    <div class="header">
      <h1>网易严选</h1>
      <van-search placeholder="搜索商品，共20008件好物" />
      <van-button color="red" plain size="mini">登录</van-button>
    </div>
    <nav class="Navtabs">
      <van-tabs class="Nav-tabs" v-if="showNavcates">
        <van-tab
          v-for="(cate, index) in Navcates"
          :title="cate.name"
          :key="index"
        ></van-tab>
      </van-tabs>
      <p class="allNav" v-else>全部频道</p>
      <div class="allNavList">
        <ul>
         <li :class="{cls1:isclick}"
         v-for="(cate,index) in Navcates" :key="index"
         @click="isclick=!isclick"
         >{{cate.name}}</li>
        </ul>   
      </div>
      <van-icon
        v-if="arrows"
        class="Nav-down"
        @click="showNav"
        name="arrow-down"
      />
      <van-icon
        v-if="!arrows"
        class="Nav-down"
        @click="showNav"
        name="arrow-up"
      />
    </nav>
  </div>
</template>

<script>
import Vue from "vue";
import { Button, Search, Tab, Tabs, Icon, Row, Col } from "vant";
import datas from "../../../datas/cateNavDatas.json";
Vue.use(Button);
Vue.use(Search);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);

export default {
  name: "Home",
  data() {
    return {
      Navcates: [],
      showNavcates: false,
      arrows: true,
      isclick:false,
      cls:'cls1'
    };
  },
  methods: {
    showNav() {
      this.showNavcates = !this.showNavcates;
      this.arrows = !this.arrows;
    },
  },
  mounted() {
    this.Navcates = datas.categoryL1List;
    console.log(this.Navcates);
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
  .homeContainer
    width 100%
    height 100%
    .header
      display flex
      align-items center
      padding-left 10px
      h1
       font-size 16px
    .Navtabs
      display flex
      width 100%
      position relative
      .Nav-tabs
        width 80%
      .allNav
        width 80%
        margin-top 15px
      .allNavList
        width 100%
        height 100%
        position absolute
        top 35px
        ul
          display flex
          flex-wrap wrap
          li
            width 70px
            height 20px 
            text-align center
            background #FAFAFA
            // border 1px solid #CCC
            margin 10px
            font-size 14px
          .cls1
            border 1px solid red
      .Nav-down
        font-size 20px
        margin-top 15px
        margin-left 27.5px
</style>
