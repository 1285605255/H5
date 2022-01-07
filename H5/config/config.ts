import { defineConfig } from 'umi';
import routes from './router.config';

export default defineConfig({
  hash: true,
  nodeModulesTransform: {
    type: 'none',
  },
  // 路由模式
  history: {
    type: 'browser',
  },
  title: "H5Demo",
  cssLoader: {
    localsConvention: 'camelCase'
  },
  dva: {
    immer: false,
    hmr: true,
    disableModelsReExport: true,
    lazyLoad: true,
  },
  // 主題
  theme: {
    'primary-color': '#000',
  },
  scripts: [{ src: '/h5/wx.js', defer: true }],
  runtimePublicPath: true,
  antd: {},
  // hd:true,
  routes,
  targets: { chrome: 49, firefox: 64, safari: 10, edge: 13, ios: 10, ie: 11, },
  fastRefresh: {},
  // ssr: {},
  exportStatic: {},
  // 路由前缀
  base: '/h5/',
  // publicPath: '/h5/',
  // 开发服务器
  devServer: {
    proxy: {
      '/api': {
        target: 'http://111.229.63.2:9006',
        pathRewrite: { '^/api': '/api' },
        changeOrigin: true
      }
    }
  },
});