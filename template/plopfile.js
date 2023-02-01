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
      template: "/** Screen */\r\n  {{properCase name}}Screen: '{{properCase name}}Screen',",
    },
    {
      type: 'modify',
      path: 'src/navigation/StackNavigation.tsx',
      pattern: /\{\/\* Plop screen \*\/}/gi,
      template:
        '{/* Plop screen */}\r\n      <Stack.Screen\r\n        name={"{{properCase name}}Screen"}\r\n        component={screenMatch(RouteKey.{{properCase name}}Screen)}\r\n        options={optionsMatch(RouteKey.{{properCase name}}Screen)}\r\n      />',
    },
    {
      type: 'modify',
      path: 'src/navigation/StackNavigation.tsx',
      pattern: /\/\/ Screen Params/gi,
      template: '// Screen Params\r\n  {{properCase name}}Screen: undefined',
    },
    {
      type: 'modify',
      path: 'src/navigation/ScreenService.tsx',
      pattern: /\/\/ Screen Import/gi,
      template:
        "// Screen Import\r\nimport {{properCase name}}Screen from '../screens/{{properCase name}}Component/{{properCase name}}Screen'",
    },
    {
      type: 'modify',
      path: 'src/navigation/ScreenService.tsx',
      pattern: /\/\/ Screen Match/gi,
      template:
        '// Screen Match\r\n    case RouteKey.{{properCase name}}Screen:\r\n      return {{properCase name}}Screen',
    },
    {
      type: 'modify',
      path: 'src/navigation/ScreenService.tsx',
      pattern: /\/\/ Screen Options/gi,
      template: '// Screen Options\r\n    case RouteKey.{{properCase name}}Screen:',
    },
  ]
  const store = [
    {
      type: 'add',
      path: 'src/constants/interface/redux/{{properCase name}}Interface.ts',
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
