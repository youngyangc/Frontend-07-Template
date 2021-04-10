# 学习笔记

1. 表达式 Expression
    + Member Expression类运算 优先级1
        + a.b
        + a[b]
        + foo \`string\`
        + super.b
        + super['b']
        + new.target
        + new Foo()
    + New Expression 表达式 优先级2
        + new Foo
    + Call Expression 优先级3
        + foo()
        + super()
        + foo()['b']
        + foo().b
        + foo()\`abc\`
    + Left Handside Expression & Right Handside Expression
        + 只有 Letf Handside 才可以放到 = 号左边
        + 如：
            + a.b = c Left Handside 可以如此操作
            + a + b = c Right Handside 不可以如此操作
    + Right Handside Expression
        + Update Expression
            + a ++
            + a --
            + ++ a
            + -- a
        + Unary Expression 单目运算
            + delete a.b
            + void foo()
            + typeof a
            + \+ a
            + \- a
            + ~ a
            + ! a
            + await a
        + Exponental Expression
            + ** 乘方运算 唯一右结合运算
            + 例如：
                + 3 \*\* 2 \*\* 3 这个时候是优先计算 2 \*\* 3 然后计算 3 \*\* 8 
    + Multiplicative Expression
        + \* / %
    + Additive Expression
        + \+ \-
    + Shift Expression
        + << >> >>>
    + Relationship Expression
        + < > <= => instanceof in
    + Equality Expression
        + ==
        + !=
        + ===
        + !==
    + Bitwise Expression
        + & ^ |
    + Logical Expression
        + &&
        + ||
    + Conditional Expression
        + ? :
2. Reference
    + Object
    + Key
    + delete 删除
    + assign 赋值
3. Statement
    + Grammar
        + 简单语句
            + ExpressionStatement 表达式语句
            + EmptyStatement 空语句
            + DebuggerStatement debugger语句
            + ThrowStatement 抛出异常
            + ContinueStatement
            + BreakStatement
            + ReturnStatement
        + 复合语句
            + BlockStatement  `{}`
                + [[type]] :normal
                + [[value]]: --
                + [[traget]]: --
            + IfStatement
            + SwitchStatement javascript中swicth和if效率没什么区别
            + IterationStatement 如：while for循环等
                + `while('表达式'){'statement'}`
                + `do 'statement' while ('表达式')`
                + `for( ; ; ){}`
                + `for( in ){}`
                + `for( of ){}`
                + `for await( of )` for的异步
            + WithStatement
            + LabelledStatemenet 相当于给语句取了个名字主要用于IterationStatement 和 break continue中
            + TryStatement 如：try catch finally
        + 声明
            + FunctionDeclaration
                + `function`
                + `function *`
                + `async function`
                + `async function *`
            + GeneratiorDeclaration
            + AsyncFunctionDeclaration
            + AsyncGeneratorDeclaration
            + VariableStatement
                + `var` 如 var a = 1 即使在代码尾部 a这个变量也是在头部已经被申明了但是赋值操作还没执行
            + ClassDeclaration
            + LexicalDeclaration
    + Runtime
        + Completion Record 执行结果
            + `if(x == 1) return 10;` 来存储语句得完成结果：是否返回了？返回值是啥？等...
                + [[type]]: normal,break,continue,return,or throw
                + [[value]]:基本类型
                + [[target]]:label 如：标识符，冒号
        + Lexical Environment 作用域 let const
4. 结构化
    + 宏任务
    + 微任务（Promise）
    + 函数调用（Eexcution Context）
        + ECMAScript Code Execution Context
            + code evaluation state
            + Function
            + Script or Module
            + Realm
                + 在JS中，函数表达式和对象直接量均会创建对象。使用.做隐式转换也会创建对象，这些对象也是有原型得，如果我们没有realm，就不知道他们得原型是什么。</br>如`var x = {};//创建了一个Object对象`</br>`1 .toString();;//装箱产生Numbr对象`
            + LexicalEnvironment
                + this
                + new.target
                + super
                + 变量
            + VariableEnvironment 仅用来处理var声明
        + Generator Execution Contexts
            + code evalution state
            + Function
            + Script or Module
            + Realm
            + LexicalEnvironment
            + VariableEnvironment
            + Generator
    + 语句/声明(Completion Record)
        + Declarative Environment Records
            + Funtion Environment Records
            + module Environment Records
        + Global Environment Records
        + Object Environment Records
    + 表达式（Reference）
    + 直接量/变量/this....
5. 闭包
    + Funtion - Closure
