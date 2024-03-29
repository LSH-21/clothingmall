export function debounce(func, delay) { //防抖函数
    let timer = null;
    console.log(1112556);
    return function(...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}
// formatDate设置时间戳转化函数
export function formatDate(date, fmt) {
    //1.获取年份
    //y+ 表示匹配一个或多个y
    //y* 表示匹配0个或多个y
    //y？ 表示匹配0个或1个y
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
        }
    }
    return fmt;
}

function padLeftZero(str) {
    return ('00' + str).substr(str.length)
}