<template>
  <div>
    <Header />
    <Nav />
    <MySwipe  />
    <div class="main" v-for="(a,i) in cates.subCateList" :key="i">
      <p>{{a.name}}</p>
      <p>{{a.name}}</p>
      <img :src="a.wapBannerUrl" alt="">
    </div>
    <Foot />
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
name:"NavItem",
data(){
  return{
    cate:[],
    index:0,
  }
},
methods:{
  a(){
    this.aa=this.cates.name
  }
},
computed:{
  ...mapState({
    cates:state=>state.IndexCateM.indexCate
  })
},
 mounted(){
   this.index= this.$route.params.key
  this.$store.dispatch('getIndexCate',this.index)
},
watch:{
  $route(from){
     this.$store.dispatch('getIndexCate',from.params.key)
  }
}
}
</script>

<style>

</style>