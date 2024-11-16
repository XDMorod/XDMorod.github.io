// var currentUrl = window.location.href;

// // 检查是否包含 "http://www.xn--w8yz0bb74a.com" 或 "http://www.keyanlun.com" 但不包含 "http://www.xn--w8yz0bb74a.com/post/keyanlun.html"
// if (currentUrl.includes("http://www.xn--w8yz0bb74a.com") && !currentUrl.includes("http://www.xn--w8yz0bb74a.com/post/keyanlun.html")) {
    
//     // 定义重定向的目标 URL
//     var redirectTo = "http://www.xn--w8yz0bb74a.com/post/keyanlun.html";
 
//     // 进行重定向
//     window.location.replace(redirectTo);
// }

// const currentUrl = window.location.href;

// // 定义重定向规则
// const redirects = [
//     {
//         source: ["www.xn--w8yz0bb74a.com", "xn--w8yz0bb74a.com", "www.keyanlun.com", "keyanlun.com"],
//         target: "http://www.xn--w8yz0bb74a.com/post/keyanlun.html"
//     },
//     // 可以在这里添加更多的重定向规则
//     // {
//     //     source: ["example.com", "another-example.com"],
//     //     target: "http://example.com/target-page"
//     // }
// ];

// // 检查是否需要重定向
// function shouldRedirect(url, redirect) {
// //     return redirect.source.some(domain => url.includes(domain)) && !url.includes(redirect.target);
//        return redirect.source.some(domain => urlObj.hostname === domain) && url !== redirect.target;
// }


// // 执行重定向
// try {
//     for (const redirect of redirects) {
//         if (shouldRedirect(currentUrl, redirect)) {
//             console.log(`Redirecting from ${currentUrl} to ${redirect.target}`);
//             window.location.replace(redirect.target);
//             break;
//         }
//     }
// } catch (error) {
//     console.error('Redirection error:', error);
// }

const currentUrl = window.location.href;

// 定义重定向规则
const redirects = [
    {
        source: ["www.xn--w8yz0bb74a.com", "xn--w8yz0bb74a.com", "www.keyanlun.com", "keyanlun.com"],
        target: "http://www.xn--w8yz0bb74a.com/post/keyanlun.html",
        exclude: ["http://www.xn--w8yz0bb74a.com/link/", "http://www.xn--w8yz0bb74a.com/post/keyanlun.html#content"]
    },
    // 可以在这里添加更多的重定向规则
    // {
    //     source: ["example.com", "another-example.com"],
    //     target: "http://example.com/target-page",
    //     exclude: ["http://example.com/exclude-page"]
    // }
];

// 检查是否需要重定向
function shouldRedirect(url, redirect) {
    const urlObj = new URL(url);
    const isSourceMatch = redirect.source.some(domain => urlObj.hostname.includes(domain));
    const isTargetMatch = url !== redirect.target;
    const isExcluded = redirect.exclude && redirect.exclude.some(excludeUrl => url.includes(excludeUrl));
    return isSourceMatch && isTargetMatch && !isExcluded;
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