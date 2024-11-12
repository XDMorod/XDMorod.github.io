if(PublicSacrificeDay()){
    document.getElementsByTagName("html")[0].setAttribute("style","filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);");
  }
  
  function PublicSacrificeDay(){
      var PSFarr=new Array("0707","0909","0918","1213");
      var currentdate = new Date();
      var str = "";
      var mm = currentdate.getMonth()+1;
      if(currentdate.getMonth()>9){
        str += mm;
      }else{
        str += "0" + mm;
      }
      if(currentdate.getDate()>9){
        str += currentdate.getDate();
      }else{
        str += "0" + currentdate.getDate();
      }
      if(PSFarr.indexOf(str)>-1){
          return 1;
      }else{
          return 0;
      }
  }

// 自动网站变灰
// 0707 - 七七事变
// 0909 - 毛主席忌辰
// 0918 - 九一八事变
// 
// 1213 - 南京公祭日


// https://blog.eurkon.com/post/70e521c2.html
function postAddToc () {
  let postContent = document.querySelector('#post>#article-container.post-content')
  let cardToc = document.getElementById('card-toc')
  if (postContent && cardToc) {
    let tocNumber = cardToc.getElementsByClassName('toc-number')
    let tocLink = cardToc.getElementsByClassName('toc-link')
    for (let i = 0; i < tocLink.length; i++) {
      document.getElementById(decodeURIComponent(tocLink[i].attributes.href.value).slice(1)).dataset.toc = tocNumber[i].innerText
    }
  }
}
postAddToc ()
// https://blog.eurkon.com/post/70e521c2.html

//在 vue.config.js 中添加Webpack配置不同写法

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
      minRatio: 1, // 压缩率小于1才会压缩
      threshold: 10240, // 对超过10k的数据压缩
      deleteOriginalAssets: false, // 是否删除未压缩的源文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false（比如删除打包后的gz后还可以加载到原始资源文件）
    }),
  ],
};

//在 vite.config.js 中添加以下代码
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [viteCompression()]
});