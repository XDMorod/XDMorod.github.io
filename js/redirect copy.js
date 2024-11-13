const currentUrl = window.location.href;

// 定义重定向规则
const redirects = [
    {
        source: ["www.xn--w8yz0bb74a.com"],
        target: "http://www.xn--w8yz0bb74a.com/post/keyanlun.html"
    },
    // 可以在这里添加更多的重定向规则
    // {
    //     source: ["example.com", "another-example.com"],
    //     target: "http://example.com/target-page"
    //  http://www.xn--w8yz0bb74a.com/
    // }
];

// 检查是否需要重定向
function shouldRedirect(url, redirect) {
    return redirect.source.some(domain => url.includes(domain)) && !url.includes(redirect.target);
}

// 执行重定向
try {
    for (const redirect of redirects) {
        if (shouldRedirect(currentUrl, redirect)) {
            console.log(`Redirecting from ${currentUrl} to ${redirect.target}`);
            window.location.replace(redirect.target);
            break;
        }
    }
} catch (error) {
    console.error('Redirection error:', error);
}