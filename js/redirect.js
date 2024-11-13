// 获取当前网页的 URL
var currentUrl = window.location.href;

// 检查是否包含 "http://www.xn--w8yz0bb74a.com"
if (currentUrl.includes("http://www.xn--w8yz0bb74a.com")) {
    
    // 定义重定向的目标 URL
    var redirectTo = "http://www.xn--w8yz0bb74a.com/post/keyanlun.html";
 
    // 进行重定向
    window.location.replace(redirectTo);
}