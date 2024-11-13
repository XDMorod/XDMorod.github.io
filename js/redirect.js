var currentUrl = window.location.href;

// 检查是否包含 "http://www.xn--w8yz0bb74a.com" 或 "http://www.keyanlun.com" 但不包含 "http://www.xn--w8yz0bb74a.com/post/keyanlun.html"
// if ((currentUrl.includes("http://www.xn--w8yz0bb74a.com") || currentUrl.includes("http://www.keyanlun.com")) && !currentUrl.includes("http://www.xn--w8yz0bb74a.com/post/keyanlun.html")) 
if (currentUrl.includes("http://www.xn--w8yz0bb74a.com") )  && !currentUrl.includes("http://www.xn--w8yz0bb74a.com/post/keyanlun.html"))
    {
    
    // 定义重定向的目标 URL
    var redirectTo = "http://www.xn--w8yz0bb74a.com/post/keyanlun.html";
 
    // 进行重定向
    window.location.replace(redirectTo);
}