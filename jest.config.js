module.exports = {
    transform: {
      '^.+\\.svelte$': [
        'svelte-jester',
        {
          preprocess: true,
        },
      ],
      '^.+\\.js$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'svelte'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    testEnvironment: 'jsdom',
  };
  