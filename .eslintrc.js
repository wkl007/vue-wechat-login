module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0,//函数定义时括号前面要不要有空格
    'indent': 0,//缩进
    'comma-dangle': [0, 'never'],//对象字面量项尾不能有逗号
    'handle-callback-err': 0,//nodejs 处理错误
    'object-curly-spacing': [0, 'never'],//大括号内是否允许不必要的空格
    'no-unused-vars': [0, {
      // 允许声明未使用变量
      'vars': 'local',
      // 参数不检查
      'args': 'none'
    }],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
