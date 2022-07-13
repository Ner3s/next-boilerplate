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
      actions: [
        {
          type: 'add',
          path: '../src/{{folderName}}/{{pascalCase name}}/index.tsx',
          templateFile: 'templates/components/index.tsx.hbs'
        },
        {
          type: 'add',
          path: '../src/{{folderName}}/{{pascalCase name}}/styles.ts',
          templateFile: 'templates/components/styles.ts.hbs'
        },
        {
          type: 'add',
          path: '../src/{{folderName}}/{{pascalCase name}}/test.tsx',
          templateFile: 'templates/components/test.tsx.hbs'
        }
      ]
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
        path: '../src/services/{{name}}-service.ts',
        templateFile: 'templates/service.ts.hbs'
      }
    ]
  });
};
