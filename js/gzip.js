module.exports = {
    chainWebpack(config, { webpack }) {
      config.plugin('compression-webpack-plugin').use(CompressionPlugin, [{
        algorithm: 'gzip',
        test: /\.(js|css|html|svg|gif|png|jpeg|txt)$/,
        filename: '[base].gz',
        threshold: 2048,
        deleteOriginalAssets: false,
      }]);
    }
  };
  
  const CompressionPlugin = require('compression-webpack-plugin');
  module.exports = {
    plugins: [
      new CompressionPlugin({
        algorithm: 'gzip', // 使用gzip压缩
        test: /\.js$|\.html$|\.css$/, // 匹配文件名
        filename: '[path].gz[query]', // 压缩后的文件名(保持原文件名，后缀加.gz)
        minRatio: 0.9, // 压缩率小于1才会压缩
        threshold: 10240, // 对超过10k的数据压缩
        deleteOriginalAssets: false, // 
      }),
    ],
  };
  
  //在 vite.config.js 中添加以下代码
  import { defineConfig } from 'vite';
  import viteCompression from 'vite-plugin-compression';
  
  export default defineConfig({
    plugins: [viteCompression()]
  });