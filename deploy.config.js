/*
  deploy.config.js说明：
  ssh: 连接服务器用户信息
  targetDir: 需要压缩的文件目录（启用本地压缩后生效）
  openCompress: 关闭后，将跳过本地文件压缩，直接上传同级目录下指定文件
  openBackUp: 开启后，若远端存在相同目录，则会修改原始目录名称，不会直接覆盖
  deployDir: 指定远端部署地址
  releaseDir: 指定远端部署地址下的发布目录名称
*/

const config = [
  {
    name: '微信授权登录测试',
    ssh: {
      host: '192.198.1.1',
      port: 22,
      username: 'admin',
      password: 'password'
    },
    targetDir: './dist',
    openCompress: true,
    openBackUp: true,
    deployDir: '/home/vue-wechat-login/',
    releaseDir: 'dist'
  }
]

module.exports = config
