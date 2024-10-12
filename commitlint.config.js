export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      'build',
      'chore',
      'ci',
      'docs',
      'feat',
      'hotfix',
      'perf',
      'refactor',
      'revert',
      'test',
      'style',

    ]
  }
}
