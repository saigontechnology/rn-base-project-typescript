const MODULE_TYPE = {
  Screen: 'screens',
  Store: 'store',
  Component: 'component',
}

module.exports = function (plop) {
  const component = [
    {
      type: 'add',
      path: 'src/components/{{properCase name}}.tsx',
      templateFile: 'generators/component/index.js.hbs',
    },
  ]
  const screensView = [
    {
      type: 'add',
      path: 'src/screens/{{properCase name}}Component/{{properCase name}}Screen.tsx',
      templateFile: 'generators/module/Module.view.js.hbs',
    },
    {
      type: 'add',
      path: 'src/screens/{{properCase name}}Component/index.ts',
      templateFile: 'generators/module/Module.index.js.hbs',
    },
    {
      type: 'modify',
      path: 'src/screens/index.ts',
      pattern: /\/\/ Screen Export/gi,
      template: "// Screen Export\r\nexport * from './{{properCase name}}Component'",
    },
    {
      type: 'modify',
      path: 'src/navigation/RouteKey.ts',
      pattern: /\/\** Screen \*\//g,
      template: "/** Screen */\r\n  {{properCase name}}Screen = '{{properCase name}}Screen',",
    },
    {
      type: 'modify',
      path: 'src/navigation/types.ts',
      pattern: /\/\** Type \*\//g,
      template: '/** Type */\r\ntype {{properCase name}}ScreenParams = {}',
    },
    {
      type: 'modify',
      path: 'src/navigation/types.ts',
      pattern: /\/\** Params \*\//g,
      template: '/** Params */\r\n  [RouteKey.{{properCase name}}Screen]: {{properCase name}}ScreenParams',
    },
  ]
  const store = [
    {
      type: 'add',
      path: 'src/store/types/{{camelCase name}}.ts',
      templateFile: 'generators/redux/interface.js.hbs',
    },
    {
      type: 'add',
      path: 'src/store/constants/{{camelCase name}}.ts',
      templateFile: 'generators/redux/constants.js.hbs',
    },
    {
      type: 'add',
      path: 'src/store/reducers/{{camelCase name}}.ts',
      templateFile: 'generators/redux/reducer.js.hbs',
    },
    {
      type: 'add',
      path: 'src/store/saga/{{camelCase name}}.ts',
      templateFile: 'generators/redux/saga.js.hbs',
    },
    {
      type: 'modify',
      path: 'src/store/reducers/index.ts',
      pattern: /\/\/ Reducer Imports/gi,
      template: "// Reducer Imports\r\nimport {{camelCase name}} from './{{camelCase name}}'",
    },
    {
      type: 'modify',
      path: 'src/store/reducers/index.ts',
      pattern: /\/\/ Reducers/gi,
      template: '// Reducers\r\n  {{camelCase name}},',
    },
    {
      type: 'modify',
      path: 'src/store/reducers/index.ts',
      pattern: /\/\/ Reducer Export/gi,
      template: "// Reducer Export\r\nexport * from './{{camelCase name}}'",
    },
    {
      type: 'modify',
      path: 'src/store/saga/index.ts',
      pattern: /\/\/ Saga Imports/gi,
      template: "// Saga Imports\r\nimport {{camelCase name}}Saga from './{{camelCase name}}'",
    },
    {
      type: 'modify',
      path: 'src/store/saga/index.ts',
      pattern: /\/\/ Sagas/gi,
      template: '// Sagas\r\n    ...{{camelCase name}}Saga,',
    },
    {
      type: 'add',
      path: 'src/store/selectors/{{camelCase name}}.ts',
      templateFile: 'generators/redux/selectors.js.hbs',
    },
    {
      type: 'modify',
      path: 'src/store/selectors/index.ts',
      pattern: /\/\/ Selector/gi,
      template: "// Selector\r\nexport * from './{{camelCase name}}'",
    },
    {
      type: 'modify',
      path: 'src/store/types/store.ts',
      pattern: /\/\/ Import Type/gi,
      template: "// Import Type\r\nimport {I{{properCase name}} } from './{{camelCase name}}'",
    },
    {
      type: 'modify',
      path: 'src/store/types/store.ts',
      pattern: /\/\/ State/gi,
      template: '// State\r\n  {{camelCase name}}: I{{properCase name}}',
    },
    {
      type: 'modify',
      path: 'src/store/types/index.ts',
      pattern: /\/\/ Export Type/gi,
      template: "// Export Type\r\nexport * from './{{camelCase name}}'",
    },
  ]
  plop.setGenerator('module', {
    description: 'Generates new module with or without redux connection',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Module name (Casing will be modified)',
      },
      {
        type: 'list',
        name: 'type',
        message: 'Choose Module type',
        choices: ['screens', 'component', 'store'],
      },
    ],
    actions(data) {
      switch (data.type) {
        case MODULE_TYPE.Screen:
          return screensView
        case MODULE_TYPE.Store:
          return store
        case MODULE_TYPE.Component:
          return component
        default:
          break
      }
    },
  })
}
