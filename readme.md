# TodoMVC App Template

> Template used for creating [TodoMVC](http://todomvc.com) apps

![](https://github.com/tastejs/todomvc-app-css/raw/master/screenshot.png)


## Getting started

- Read the [Application Specification](https://github.com/tastejs/todomvc/blob/master/app-spec.md) before touching the template.

- Delete this file and rename `app-readme.md` to `readme.md` and fill it out.

- Clone this repo and install the dependencies with [npm](https://npmjs.com) by running: `npm install`.


## License

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/4.0/80x15.png" /></a><br />This <span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/InteractiveResource" rel="dct:type">work</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://sindresorhus.com" property="cc:attributionName" rel="cc:attributionURL">TasteJS</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/deed.en_US">Creative Commons Attribution 4.0 International License</a>.




## 路由
## NG中路由是单独提供的功能模块ngRoute,也是一个单独发行的文件
- 安装或者下载angular-route
- 引入这个包
- 在自己的模块中添加ngRoute的依赖
- 路由配置(配置路由规则)
 + 规则指的是什么 什么样的请求 找什么控制器
 + [{url:'',controller:"MainController"}]
- 编写对应控制器和视图

/students/zhangsan

/studnents/:name
{
 name:zhangsan 
}

/:role/:name:
{
role:students,
name:zhangsan
}

 ## 如果连入第三方文件时不写协议的话
 http://apps.bdimg.com/libs/angular.js/1.4.9/angular.min.js
 <script scr="//apps.bdimg.com/libs/angular.js/1.4.9/angular.min.just"></script>

## 如果当前网站是HTTP的方式部署的话，请求:
http://apps.bdimg.com/libs/angular.js/1.4.9/angular.min.js
## 如果是HTTPS的话，请求
https://apps.bdimg.com/libs/angular.js/1.4.9/angular.min.js