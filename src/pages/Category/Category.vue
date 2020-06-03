<template>
  <div class="categoryContainer">
    <van-search class="search" placeholder="请输入搜索关键词" />
    <div class="List">
      <div class="left">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            :title="l.name"
            v-for="(l, i) in cateNavList.categoryL1List"
            :key="i"
            @click="goCategory"
          />
        </van-sidebar>
      </div>
      <div class="right"  >
        <div>
          <img :src="a?currentPage.bannerUrl:currentPage.bannerUrl" alt="" />
          <div class="prefecture"  v-show="!a" >
            <div class="prefectureItem" v-for="(c,i) in cateLists.categoryList" :key="i">
              <img :src="c.bannerUrl" alt="" />
              <p> {{c.name}}</p>
            </div>
          </div>
          <div class="cateList" v-show="a">
              <div class="categoryItem" v-for="(c,i) in cateLists.subCateList" :key="i">
                <img :src="c.wapBannerUrl" alt="" />
                <p>{{c.name}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState } from "vuex";

export default {
  name: "Category",
  data() {
    return {
      activeKey: 0,
      a: true,
      currentPage:{}
    }
  },
  methods: {
    goCategory(i){
      this.$router.push(`/Category/${i}`,()=>{})
      }
    },
  computed: {
    ...mapState({
      cateNavList: (state) => state.CateNavList.cateNavList,
      cateLists:(state)=>state.CateLists.cateLists,
    }),
  },
 async mounted() {
    await this.$store.dispatch("getCateNavList");
    let i = this.$route.params.key
    this.activeKey = i
    await this.$store.dispatch("getCateLists",[i]);
    let l = new Bscroll('.left')
    let r = new Bscroll('.right')
    console.log(l,r)
    this.currentPage=this.cateNavList.categoryL1List[i]
    if(i<=3){
        this.a=false
      }else{
        this.a=true
      }
  },
  watch:{
    $route(from){
      console.log(from.params.key)
      let i = from.params.key
      this.currentPage=this.cateNavList.categoryL1List[i]

       this.$store.dispatch("getCateLists",[i]);

      if(i<=3){
        this.a=false
      }else{
        this.a=true
      }
    }
  }
};
</script>

<style lang="stylus">
.categoryContainer
  width 100%
  height 100%
  overflow hidden
  .search
    width 100%
  .List
    display flex
    height  580px
    overflow hidden
    .left
      width 20%
      float left
      overflow hidden
    .right
      width 80%
      margin-bottom 50px
      overflow hidden
      .prefecture
        display flex
        flex-wrap wrap
        justify-content space-between
        .prefectureItem
          font-size 14px
          text-align center
          margin 5px
        img
          background pink
          width 65px
          height 60px
      .cateList
        display flex
        flex-wrap wrap
        justify-content space-around
        .title
          font-size 20px
        .categoryItem
          font-size 14px
          text-align center
          img
            width 65px
            height 60px
</style>
