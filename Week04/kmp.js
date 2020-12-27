/**
 * 
 * @param {string} source 
 * @param {string} pattern 
 */
function kmp(source, pattern) {
    //计算table
    let table = new Array(pattern.length).fill(0);
    {
        let i = 1, j = 0;//i为搜索字符 j为比较字符
        while (i < pattern.length && pattern.length>2) {
            if (pattern[i] === pattern[j]) {
                ++j, ++i;
                table[i] = j;
            } else {
                if (j > 0) {
                    j = table[j];
                } else {
                    ++i;
                }
            }
        }
    }
    console.log(table)
    {
        let i = 0; j = 0;//i为source下标 j为pattern下标
        while(i<source.length){
            if(pattern[j] === source[i]){
                ++i,++j;
            }else{
                if(j >0){
                    j = table[j]
                }else{
                    ++i;
                }
            }
            if(j === pattern.length) return true;
        }
        return false;
    }

    //console.log(table)
    //abcdabce
    //a a b a a a c

    //匹配
}

console.log(kmp('Hello','llox'))
