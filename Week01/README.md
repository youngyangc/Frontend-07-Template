学习笔记
1. {}可以改变let的作用域，不同的{}域可以声明相同的let变量
2. break只能跳出当前代码块，但是可以在外层代码块加入标志 outer:父代码块{子代码块{break outer}}
3. javascript的3种异步机制：callback、promise、async/await(基于promise的封装)、generator/yield
4. callback:逐层嵌套 阅读上和运行效率上都有所降低。
5. promise:没有嵌套关系，是链式表达式的关系。
6. async/await：语法上用同步代码顺序来实现异步调用。基于promise实现的一种异步调用。当用来修改业务处理流程的时候代码修改较方便。
7. generator/yield：早期用来实现async/await的效果。
8. async generator:见day01.html里的样例代码。