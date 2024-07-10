# kanson-ui 组件库

### 快速开始

####  1. 安装组件库

```bash
npm i kanson-vue2-library
```
#### 2. 引用组件库
``` javascript
// 公司组件库不能泄露,搭建私人组件库面试用,后续会陆续更新
// 你需要添加声明文件index.d.ts,并写入declare module "kanson-vue2-library"
// 全部引入
import 'kanson-vue2-library/dist/css/index.css';
import KUI from 'kanson-vue2-library'
Vue.use(KUI)

// 按需引入
import 'kanson-vue2-library/dist/css/identitycard.css';
import IdentityCard from 'kanson-vue2-library'
Vue.use(IdentityCard)
```
