const CONSTANTS = {
  STYLES: {
    type: 'add',
    path: '../src/{{folderName}}/{{pascalCase name}}/styles.ts',
    templateFile: 'templates/components/styles.ts.hbs'
  },
  STORIES: {
    type: 'add',
    path: '../src/{{folderName}}/{{pascalCase name}}/stories.tsx',
    templateFile: 'templates/components/stories.tsx.hbs'
  },
  TEST: {
    type: 'add',
    path: '../src/{{folderName}}/{{pascalCase name}}/test.tsx',
    templateFile: 'templates/components/test.tsx.hbs'
  },
  INDEX: {
    type: 'add',
    path: '../src/{{folderName}}/{{pascalCase name}}/index.tsx',
    templateFile: 'templates/components/index.tsx.hbs'
  },
  INDEX_TEMPLATE: {
    type: 'add',
    path: '../src/{{folderName}}/{{pascalCase name}}/index.tsx',
    templateFile: 'templates/components/index-template.tsx.hbs'
  },
  INDEX_PAGE: {
    type: 'add',
    path: '../src/{{folderName}}/{{pascalCase name}}/index.tsx',
    templateFile: 'templates/components/index-page.tsx.hbs'
  }
};

const handleComponents = {
  pages: [CONSTANTS.INDEX_PAGE],
  components: [
    CONSTANTS.INDEX,
    CONSTANTS.TEST,
    CONSTANTS.STORIES,
    CONSTANTS.STYLES
  ],
  templates: [CONSTANTS.INDEX_TEMPLATE, CONSTANTS.TEST, CONSTANTS.STYLES]
};

module.exports = function (plop) {
  plop.setWelcomeMessage(`
    Welcome to CLI, What do you need?
  `),
    plop.setGenerator('Create component', {
      description: 'React component',
      prompts: [
        {
          type: 'list',
          name: 'folderName',
          message: 'select the folder or path',
          choices: ['components', 'pages', 'templates']
        },
        {
          type: 'input',
          name: 'name',
          message: 'enter the component name:'
        }
      ],
      actions: (data) => handleComponents[data.folderName]
    });

  plop.setGenerator('Create service', {
    description: 'Create API service consumer',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'enter the service name:'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/services/{{name}}/index.ts',
        templateFile: 'templates/service.ts.hbs'
      }
    ]
  });

  plop.setGenerator('Create a contextAPI', {
    description: 'Create a contextAPI',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'enter the context name:'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/contexts/use-{{lowerCase name}}/index.tsx',
        templateFile: 'templates/context/index.hbs'
      }
    ]
  });
  plop.setGenerator('Create a hook', {
    description: 'Create a hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'enter the hook name:'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/hooks/use-{{dashCase name}}/index.tsx',
        templateFile: 'templates/hook/index.hbs'
      }
    ]
  });
};
