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


// // https://blog.eurkon.com/post/70e521c2.html
// function postAddToc () {
//   let postContent = document.querySelector('#post>#article-container.post-content')
//   let cardToc = document.getElementById('card-toc')
//   if (postContent && cardToc) {
//     let tocNumber = cardToc.getElementsByClassName('toc-number')
//     let tocLink = cardToc.getElementsByClassName('toc-link')
//     for (let i = 0; i < tocLink.length; i++) {
//       document.getElementById(decodeURIComponent(tocLink[i].attributes.href.value).slice(1)).dataset.toc = tocNumber[i].innerText
//     }
//   }
// }
// postAddToc ()
// // https://blog.eurkon.com/post/70e521c2.html

// //在 vue.config.js 中添加Webpack配置不同写法

