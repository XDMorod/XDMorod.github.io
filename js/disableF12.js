// 禁止嵌套
if (window.top != window.self) {
    top.location.href = "keyanlun.com";
}

// document.oncontextmenu = function () { return false; };
// document.onselectstart = function () { return false; };

window.addEventListener("keydown", function(e) {
    // 可以判断是不是mac，如果是mac,ctrl变为花键
    // event.preventDefault() 方法阻止元素发生默认的行为。
    if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        e.preventDefault();
    }
}, false);

document.onkeydown = function () {
    if (window.event && (123 == window.event.keyCode                    // F12
        || (window.event.ctrlKey && window.event.shiftKey && (74 === window.event.keyCode || 73 === window.event.keyCode || 67 === window.event.keyCode))   // Ctrl + Shift + I/J/C
        || (window.event.ctrlKey && 121 === window.event.keyCode)       // Ctrl + F10
        || (window.event.shiftKey && 121 === window.event.keyCode)      // Shift + F10
        || (window.event.ctrlKey && 85 === window.event.keyCode)        // Ctrl + U
        || (window.event.ctrlKey && 80 === window.event.keyCode)        // Ctrl + P
        || (window.event.ctrlKey && 83 === window.event.keyCode))       // Ctrl + S
      ) {
            window.event.preventDefault();
            return window.event.keyCode = 0, window.event.returnValue = false, false;
      }
};