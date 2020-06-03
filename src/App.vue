<template>
  <div>
    <router-view/>
    <Foot/>
  </div>
</template>

<script>

import Foot from './pages/foot'
export default {
  name: 'App',
  components:{
    Foot,
  
  },
  mounted(){ 

    }
}
</script>

<style>
</style>
