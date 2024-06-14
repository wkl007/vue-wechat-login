module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [0, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build', // 构建
        'ci', // ci配置，脚本文件等更新
        'chore', // Other changes that don't modify src or test files. 改变构建流程、或者增加依赖库、工具等
        'docs', // Adds or alters documentation. 仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等
        'feat', // Adds a new feature. 新增feature
        'fix', // Solves a bug. 修复bug
        'perf', // Improves performance. 优化相关，比如提升性能、体验
        'refactor', // Rewrites code without feature, performance or bug changes. 代码重构，没有加新功能或者修复bug
        'revert', // Reverts a previous commit. 回滚到上一个版本
        'style', // Improves formatting, white-space. 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑
        'test', // Adds or modifies tests. 测试用例，包括单元测试、集成测试等
      ],
    ],
  },
};
