# vue-wechat-login

## 介绍

项目基于`vue 3.0` ,`vant`,`typescript`开发的微信授权登录示例。

使用前请阅读 [CSDN博客](https://blog.csdn.net/qq_35844177/article/details/79743812) 及微信网页授权 [相关文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html) 。

## 运行调试

1. 克隆项目，终端进入项目根目录

```javascript
git clone https://github.com/wkl007/vue-wechat-login.git
```

2. 安装项目依赖

```javascript
yarn install || npm install
```

3. 修改项目环境变量中APP_URL与APP_ID

```
VITE_APP_API_URL=YOUR API URL
VITE_APP_WECHAT_APP_ID=YOUR APP ID
```

4. 修改登录接口请求地址

```javascript
static login (data) {
    return request({
      url: '/auth/wechat',// YOUR URL
      method: 'post',
      data
    })
}
```

5. 本地运行

```javascript
yarn serve || npm run serve
```

6. 打包

```javascript
yarn build || npm run build
```

## 运行效果图

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190723171657695.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1ODQ0MTc3,size_16,color_FFFFFF,t_70)

