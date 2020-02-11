<template>
  <div id="app">
    <keep-alive>
      <router-view v-wechat-title="$route.meta.title" v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-wechat-title="$route.meta.title" v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<style lang="less">
@import "./assets/styles/variables";

#app {
  color: @color-text;
  font-size: @font-size-normal;
}
</style>
