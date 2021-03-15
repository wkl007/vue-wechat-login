<template>
  <img alt="Vue logo" src="./assets/logo.png"/>
  <van-button>
    vuex测试
  </van-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup () {
    console.log(import.meta.env)
  }
})
</script>
