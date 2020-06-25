<template>
  <div id="app">
    <router-view/>
    <hr>
  </div>
</template>

<style lang="scss">
@import "assets/style/reset";
  @import "assets/style/helper";
  body{
    font-family: $font-hei;
  }
  #app{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333333;
  }
</style>
