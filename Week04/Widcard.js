/**
 * 
 * @param {string} source 
 * @param {string} pattern 
 */
function find(source, pattern) {
    let startCount = 0;
    //判断匹配字符串中有多少个*号
    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] === "*") startCount++;
    }
    //如果没有*号
    if (startCount === 0) {
        //完全匹配
        for (let i = 0; i < pattern.length; i++) {
            if (pattern[i] !== source[i] && pattern[i] !== "?") return false;
        }
        return;
    }

    let i = 0;//代表pattern的位置
    let lastIndex = 0;//代表source的位置

    //找到第一个*为止
    for (i; pattern[i] !== "*"; i++) {
        if(pattern[i] !== source[i] && pattern[i] !=="?") return false;//如果不匹配则false
    }

    lastIndex = i;

    //搜索第一个*号后面和最后一个*号前面的*号字符串
    for(let p = 0;p<startCount - 1 ;p++){
        i++;//i从*号一个字符开始搜索
        let subPattern = ""; // *号截取字符串
        while(pattern[i] !== "*"){
            subPattern += pattern[i];
            i++;
        }
        let reg = new RegExp(subPattern.replace(/\?/g,"[\\s\\S]"),"g");
        reg.lastIndex = lastIndex;//让我们正则exec从lastindex位置继续进行匹配
        //如果正则没有匹配到
        if(!reg.exec(source)) return false;
        lastIndex = reg.lastIndex;//更新lastindex位置
    }

    //匹配最后一个*号 从后往前匹配
    for(let j = 1;j<=source.length - lastIndex && pattern[pattern.length-j] !== "*";j++){
        if(pattern[pattern.length-j] !== source[source.length-j] && pattern[pattern.length-j] !== "?") return false;
    }
    return true

}

//console.log(find("abcabasdsdwaxcx","a*b*as*x"))