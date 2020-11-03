## vue-wechat-login

此项目分为vue3.0版本-master分支与vue2.0版本-vue_2.0分支，可以查看对应分支代码。

移动端微信公众号授权登录示例，[CSDN博客](https://blog.csdn.net/qq_35844177/article/details/79743812)

请提前阅读有关微信公众平台[相关文档](https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Overview.html)

### 目录

- [运行调试](#运行调试)
- [运行效果图](#运行效果图)

### 运行调试

#### 1. 克隆项目，终端进入项目根目录

```javascript
git clone https://github.com/wkl007/vue-wechat-login.git
```

#### 2. 安装项目依赖

```javascript
yarn install || npm install
```

#### 3. 修改项目环境变量中APP_URL与APP_ID

```
VUE_APP_API_URL=YOUR API URL
VUE_APP_WECHAT_APP_ID=YOUR APP ID
```

#### 4. 修改登录接口请求地址

```javascript
static login (data) {
    return request({
      url: '/auth/wechat',// YOUR URL
      method: 'post',
      data
    })
}
```

#### 5. 本地运行

```javascript
yarn serve || npm run serve
```

#### 6. 打包

```javascript
yarn build:dev || npm run build:dev
yarn build:pro || npm run build:pro
```

### 运行效果图

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190723171657695.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1ODQ0MTc3,size_16,color_FFFFFF,t_70)

