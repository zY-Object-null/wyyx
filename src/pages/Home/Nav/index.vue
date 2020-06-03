<template>
  <nav class="Navtabs">
    <van-tabs v-model="index"  class="Nav-tabs"    @click="goOther" v-if="showNavcates">
      <van-tab
        v-for="(cate, index) in Navcates"
        :title="cate.name"
        :key="index"
      ></van-tab>
    </van-tabs>
    <van-popup v-model="show" 
     class="showPopup"
      duration='0' 
     :close-on-click-overlay = false 
      position="{top:48px}" 
      :style="{ height: '30%' }">
      <span class="allFont">全部频道</span>
      <div class="allNavList" v-if="!showNavcates">
      <ul>
        <li
          :class="{ cls1: isclick }"
          v-for="(cate, index) in Navcates"
          :key="index"
          @click="goOther(index)"
        >
          {{ cate.name }}
        </li>
      </ul>
    </div>
    </van-popup>
    <van-icon
      v-if="arrows"
      class="Nav-down"
     @click="showPopup"
      name="arrow-down"
    />
    <van-icon
      v-if="!arrows"
      class="Nav-down"
      @click="showPopup"
      name="arrow-up"
    />
  </nav>
</template>

<script>
import { reqIndexCate} from "../../../api";
export default {
  name: "Nav",
  data() {
    return {
      Navcates: [],
       HomeData:[],
      showNavcates: true,
      arrows: true,
      isclick: false,
      cls: "cls1",
      show: false,
      index:0
    };
  },
   methods: {
      showPopup() {
      this.showNavcates = !this.showNavcates;
      this.show = !this.show;
      this.arrows = !this.arrows;
    },
    goOther(index){
      if(index===0){
        this.$router.push('/home',()=>{})
      }else{
        this.$router.push(`/Other/${index}`,()=>{})
      }
    },
  },
  mounted() {
    reqIndexCate().then((result) => {
      this.Navcates = result.data;
    });
    this.index = this.$route.params.key*1
  },
  watch:{
    $route(){
      if(this.show){
        this.showPopup()
      }
    }
  }
};
</script>

<style lang="stylus" scope>
.Navtabs
  display flex
  background white
  width 100%
  margin-top 50px
  position fixed
  top 0
  z-index 9999
  .Nav-tabs
    width 80%
  .allNav
    width 80%
    margin-top 15px
    font-size 14px
  .allNavList
    width 100%
    height 100%
    position absolute
    top 35px
    ul
      display flex
      flex-wrap wrap
      background white
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
  .showPopup
    width 100%
  .van-overlay
    position fixed
    top 55px
    left 0
    .allFont
      margin-top 5px
      font-size 20px     
  .Nav-down
    font-size 20px
    position absolute
    top 15px
    right  27.5px
    z-index 9999
    background wehite
.show
  width 20px
  height 20px
  margin-left 27px
.bigImg
  width 100%
  height 150px
</style>
