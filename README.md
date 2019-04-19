# react-roadmap
react 学习记录

### 一. 创建项目

#### 1： 初始化项目

此处是采用react的脚手架进行创建项目，之后会介绍怎么从零开始

现在控制台中切换到目标路径，然后运行如下命令：

**npx**

~~~shell
$ npx create-react-app my-app
~~~

**npm**

~~~shell
$ npm init react-app my-app
~~~

**yarn**

~~~shell
$ yarn create react-app my-app
~~~



#### 2. 配置eslint

(1): 在项目中安装Eslint `以yarn为例`

~~~shell
$ yarn add eslint eslint eslint-plugin-react -D
~~~



新建并编辑.eslintrc文件如下：

```json
{
  "extends": "eslint:recommended",
  "ecmaFeatures": {
    "jsx": true,
    "modules": true
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "rules": {
    "strict": 0,
    "valid-jsdoc": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/react-in-jsx-scope": 2
  },
  "plugins": [
    "react"
  ]
}

```



#### 二. 创建以Typescript为基础的React项目

#### 1.初始化项目

npx

~~~shell
$ npx create-react-app my-app --scripts-version=react-scripts-ts
~~~

npm

~~~shell
$ npm init react-app my-app --scripts-version=react-scripts-ts
~~~

yarn

~~~shell
$ yarn create react-app my-app --scripts-version=react-scripts-ts
~~~

修改tsconfig.json

```json
 {
-  "extends": ["tslint:recommended", "tslint-react", "tslint-config-prettier"],
+  "extends": [],
+  "defaultSeverity": "warning",
   "linterOptions": {
     "exclude": [
       "config/**/*.js",
       "node_modules/**/*.ts"
     ]
   }
 }
```

详情可以参考[官方文档](<https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter>)



























































































































































































































































