坑也太多了

初版已经实现

依赖 nodejs 运行，启动口令见 package.json

2020 / 1 / 17 :

抄完了 vdom 这一部分，也不知道该从 react / vue 抄什么了。

我个人认为，视图的刷新等由程序员手动进行更符合人的直觉，对于生命周期、状态管理、组件类等，并没有太大的必要去实现

下一步的计划是以 多页应用为框架的产出目标，并重视首屏加载优化。

具体计划是：

1. 多个程序入口（page1.ts, page2.ts） => page1.html, page2.html

    而非 （page1.ts, page2.ts）=> index.html
    
    由于多入口，所以访问单页，比如 page2 时，那当然不用再加载无关的 page1.ts

    (写了一个 webpack 插件来实现， 第一部分完成)

2. 加入“预处理”，一些固定的计算和“初始化”的一些固定部分，可以“预处理”掉，而不是留给浏览器去计算。
    
   比如： 页面 1 初始化时需要悬挂 10 个 child 节点到 root 节点 （ for 10 :root <- child），如果这个过程无论哪个客户端看到都是同样的结果，那便可以直接“预处理”为 root = child, child ...
   
   （预处理是可以手动进行的。
   
   
   
---

预处理的打算还是放弃好了……

这个框架已经打包放在了 https://www.npmjs.com/package/@fumeboy/relax

