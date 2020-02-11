<template>
  <div class="home">
    <van-cell-group>
      <van-cell
        title="微信授权登录测试"
      ></van-cell>
      <van-cell
        title="登录状态"
        :value="loginStatus"
      ></van-cell>
      <van-cell
        title="accessToken"
        :value="accessToken"
      ></van-cell>
      <van-cell
        title="userInfo"
        :value="JSON.stringify(userInfo)"
      ></van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapGetters(['userInfo', 'accessToken', 'loginStatus']),
  },
}
</script>
