import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { VitePWA } from 'vite-plugin-pwa'
import viteCompression from 'vite-plugin-compression'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

const path = require('path')

const resolve = (dir: string) => path.join(__dirname, dir)

export default defineConfig({
  // 项目根目录
  root: process.cwd(),
  // 公共基础路径
  base: '/',
  // 插件
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [VantResolver()]
    }),
    VitePWA({
      manifest: {},
      workbox: {
        skipWaiting: true,
        clientsClaim: true
      }
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'brotliCompress',
      ext: '.br'
    })
  ],
  // 静态资源服务的文件夹
  publicDir: 'public',
  resolve: {
    // 别名
    alias: {
      '@': resolve('src')
    }
  },
  // css相关配置
  css: {
    preprocessorOptions: {
      less: {
        lessOptions: {
          modifyVars: {},
          javascriptEnabled: true
        }
      }
    }
  },
  // 开发服务配置
  server: {
    host: true,
    open: true,
    proxy: {}
  },
  // 打包服务配置
  build: {
    // 设置最终构建的浏览器兼容目标
    target: 'modules',
    // 指定输出路径
    outDir: 'dist',
    // 指定生成静态资源的存放路径
    assetsDir: 'assets',
    // 小于此阈值的导入或引用资源将内联为 base64 编码
    assetsInlineLimit: 4096,
    // 启用/禁用 CSS 代码拆分
    cssCodeSplit: true,
    // 构建后是否生成 source map 文件
    sourcemap: false
  }
})
