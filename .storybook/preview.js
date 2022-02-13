export const parameters = {
  customizeAntdTheme: {
    modifyVars: {
      'primary-color': '#ff1771',
      'border-radius-base': '20px',
    },
  },
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        'Docs',
        ['Intro', 'Install', 'Develop', 'Publish', 'Linters', 'Testing', 'Style options', 'Add documentation'],
        'Example',
      ],
    },
  },
};
