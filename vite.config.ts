import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { VitePWA } from 'vite-plugin-pwa'
import styleImport from 'vite-plugin-style-import'
import viteCompression from 'vite-plugin-compression'

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
    VitePWA({
      manifest: {},
      workbox: {
        skipWaiting: true,
        clientsClaim: true
      }
    }),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: name => `vant/es/${name}/style/index`
        }
      ]
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
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
    host: '0.0.0.0',
    port: 3000,
    open: true,
    https: false,
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
    sourcemap: false,
    // 传递给 Terser 的 minify 选项
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  // 依赖优化配置
  optimizeDeps: {
    include: [
      'vant'
    ]
  }
})
