const expectedTypes = ['feat', 'fix', 'chore', 'test', 'build', 'refactor', 'docs'];

module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: [
    {
      rules: {
        'custom-type-enum': ({ type }) => {
          if (!expectedTypes.includes(type)) {
            return [false,
              `
              ## Errors Conventional Commits ##
              Type must be one of: ${expectedTypes.join(', ')} 
              Example: feat: add new feature
              `];
          }
          return [true];
        },
      },
    },
  ],
  rules: {
    'custom-type-enum': [2, 'always'],
  },
};
