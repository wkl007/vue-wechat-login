<template>
  <div class="home">
    <van-cell-group>
      <van-cell title="微信授权登录测试"/>
      <van-cell title="登录状态" :value="loginStatus"/>
      <van-cell title="accessToken" :value="accessToken"/>
      <van-cell title="userInfo" :value="JSON.stringify(userInfo)"/>
    </van-cell-group>
    <!--{{ loginStatus }}
    <van-button @click="setLoginStatus(Math.random())">
      vuex测试
    </van-button>-->
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Home',
  setup () {
    const store = useStore()

    const loginStatus = computed(() => store.getters.loginStatus)
    const accessToken = computed(() => store.getters.accessToken)
    const userInfo = computed(() => store.getters.userInfo)

    /* function setLoginStatus (loginStatus: number) {
      store.dispatch('setLoginStatus', loginStatus)
    } */

    return {
      loginStatus,
      accessToken,
      userInfo
      // setLoginStatus
    }
  }
})
</script>
