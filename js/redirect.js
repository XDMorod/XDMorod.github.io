const currentUrl = window.location.href;

// 定义重定向规则
const redirects = [
    {
        source: ["www.xn--w8yz0bb74a.com", "xn--w8yz0bb74a.com", "www.keyanlun.com", "keyanlun.com",'http://www.xn--w8yz0bb74a.com'],
        target: "http://www.xn--w8yz0bb74a.com/post/keyanlun.html"
    },
    // 可以在这里添加更多的重定向规则
    // {
    //     source: ["example.com", "another-example.com"],
    //     target: "http://example.com/target-page"
    // }
];

// 检查是否需要重定向
function shouldRedirect(url, redirect) {
    const urlObj = new URL(url);
    return redirect.source.some(domain => urlObj.hostname === domain) && url !== redirect.target;
}

// 执行重定向
for (const redirect of redirects) {
    if (shouldRedirect(currentUrl, redirect)) {
        window.location.replace(redirect.target);
        break;
    }
}