<template>
  <div>
    <router-view></router-view>
    <footer>
      <router-link class='base' :class="{active:choose===1}" @click="change(1)" to="/msite">外卖</router-link>
      <router-link class='base' :class="{active:choose===2}" @click="change(2)" to="/search">搜索</router-link>
      <router-link class='base' :class="{active:choose===3}" @click="change(3)" to="/order">订单</router-link>
      <router-link class='base' :class="{active:choose===4}" @click="change(4)" to="/profile">我的</router-link>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data(){
      return{
        choose:0
      }
    },
    mounted(){
      console.log(this)
    },
    methods:{
      change(num){
        this.choose=num
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  footer 
    position absolute
    left 0
    bottom 0
    width 100%
    display flex
    .base
      width  25%
      height 30px
      text-align center
      line-height 30px
    .active 
      color green  
 
</style>
