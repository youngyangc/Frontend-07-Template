# 学习笔记

1. BNF:
    + 四则运算 如：1 + 2 *3;1* (1 + 2);  
        + 终结符
            + Number
            + \+ \- * /
        + 非终结符
            + MultiplicativeExpression
            + AddtiveExpression
        + 乘法产生式
            + \<MultiplicativeExpression\>::=\<BracketExpression\>|
                \<MultiplicativeExpression\>"*"\<BracketExpression\>|
                \<MultiplicativeExpression\>"/"\<BracketExpression\>
        + 加法产生式
            + \<AddtiveExpression\>::=\<MultiplicativeExpression>|
                \<AddtiveExpression\>"+"\<MultiplicativeExpression\>|
                \<AddtiveExpression\>"-"\<MultiplicativeExpression\>
        + 带括号产生式
            + \<BracketExpression\>::=\<Number\>|
                "("\<AddtiveExpression\>")"

2. 形式语言
    + 用途
        + 数据描述语言
            + JSON
            + HTML
            + XAML
            + SQL
            + CSS
            + YAML
        + 编程语言
            + C
            + C++
            + Java
            + C#
            + Python
            + Ruby
            + Perl
            + Lisp
            + T-SQL
            + Clojure
            + Haskell
            + JavaScript
            + Groovy
            + Go
            + PHP
    + 表达方式
        + 声明式语言
            + JSON
            + HTML
            + XAML
            + SQL
            + CSS
            + Lisp
            + Clojure
            + Haskell
            + YAML
        + 命令型语言
            + C
            + C++
            + Java
            + C#
            + Python
            + Ruby
            + Perl
            + JavaScript
            + Groovy
            + Go
            + PHP
3. 图灵完备性
    + 命令式——图灵机
        + goto
        + if和while
    + 声明式——lambda
        + 递归
4. 动态与静态
    + 动态 在用户的设备上或者在在线的服务器上运行且在产品的实际运用过程中
        + 在用户的设备/在线服务器
        + 产品实际运行时
        + Runtime
    + 静态
        + 在程序员的设备上
        + 产品开发时
        + Compiletime
5. 类型系统
    + 动态类型系统(在实际运行过程中)与静态类型系统 (程序员自己运行中)

    + 强类型与弱类型(强类型不会自动进行转换)
        + String + Number
        + String == Boolean
    + 复合类型
        + 结构体 {a:T1,b:T2}
        + 函数签名 (T1,T2) => T3
    + 子类型
    + 泛型
        + 逆变 凡是Function\<Child\>都可以用Function\<Parent\>
        + 斜变 凡是Array\<Parent\>都可以用Array\<Children\>
6. 一般命令式编程语言
    + Athom 原子
        + Identifier 标识符
        + Literal 直接量
    + Expression 表达式
        + Atom 原子
        + Operator 操作符
        + Punctuator 标点符
    + Statement 声明
        + Expression 表达式
        + Keyworkd 关键字
        + Punctuator 标点符
    + Structure 结构化
        + Function 函数
        + Class 类
        + Process 过程
        + Namespace 命名
    + Program 程序 JavaScript nmp来做这个操作
        + Program 程序
        + Module 模块
        + Package 包
        + Library 文库
    