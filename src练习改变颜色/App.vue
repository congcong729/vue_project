<template>
  <div>
    <h1>aaaaaaaaa</h1>
    <ul>
      <li @click="changeIndex(index)" :class="{active:currentIndex===index}" v-for="(item,index) in 20" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        currentIndex:0
      }
    },
    methods:{
      changeIndex(index){
        this.currentIndex=index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './common/stylus/mixins.styl'
  $color = skyblue 
  h1 
    color $color
  li
    height 20px
    &.active
      color $color
</style>
