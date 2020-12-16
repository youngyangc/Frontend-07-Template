学习笔记
1. 四则运算词法定义
    + TokenNumber: 1 2 3 4 5 6 7 8 9 0 .的组合
    + Operator: +、-、*、/
    + Whitespace: <SP> 空白符
    + LineTerminator : <LF> <CR> 换行符
2. 正则regexp
    + RegExpObject.lastIndex 为匹配文本的最后一个字符的下一个位置
3. generator函数 每次函数yield 一个数据的时候都能被 外层 let .. of generatoreFuc() 获取到