export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'chore', 'test']],
    'scope-empty': [1, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'references-empty': [2, 'never']
  },
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['#']
    }
  }
}
