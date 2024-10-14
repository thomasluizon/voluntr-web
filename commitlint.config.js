export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'hotfix', 'docs', 'style', 'refactor', 'test', 'chore', 'ci', 'build', 'perf']]
  }
}
