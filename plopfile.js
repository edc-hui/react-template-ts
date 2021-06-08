module.exports = plop => {
  // 创建一个plop生成器，第一个参数就是命令的key，后面的使用方式就是 yarn plop component。 第二个参数是对象，为生成器的配置项
  plop.setGenerator('component', {
    description: '创建一个src/components文件夹下面的公共组件',
    // prompts 就是命令行窗口和开发者交互的内容
    prompts: [
      {
        type: 'input', // 开发者通过输入内容的方式进行交互
        name: 'componentName', // 用于获取用户输入内容的key
        message: '请输入组件名', // 命令行窗口中询问开发者的语句
        default: 'MyComponent', // componentName对应的默认值
      },
    ],
    // actions开发者在命令行窗口完成交互后，程序最终要做的事情。数组中有几项，那么程序就会做几件事情
    actions: [
      {
        type: 'add', // 程序要新增文件
        path: 'src/components/{{componentName}}/{{componentName}}.tsx', // 新增的文件的目标路径
        templateFile: 'plop-templates/component.hbs', // 新增文件中的内容要来自此处指定的模板内容
      },
      {
        type: 'add', // 程序要新增文件
        path: 'src/components/{{componentName}}/{{componentName}}.scss', // 新增的文件的目标路径
        templateFile: 'plop-templates/component.scss.hbs', // 新增文件中的内容要来自此处指定的模板内容
      },
    ],
  }),
    plop.setGenerator('page', {
      description: '创建一个src/pages文件夹下面的公共组件',
      // prompts 就是命令行窗口和开发者交互的内容
      prompts: [
        {
          type: 'input', // 开发者通过输入内容的方式进行交互
          name: 'componentName', // 用于获取用户输入内容的key
          message: '请输入页面名', // 命令行窗口中询问开发者的语句
          default: 'MyComponent', // componentName对应的默认值
        },
      ],
      // actions开发者在命令行窗口完成交互后，程序最终要做的事情。数组中有几项，那么程序就会做几件事情
      actions: [
        {
          type: 'add', // 程序要新增文件
          path: 'src/pages/{{componentName}}/{{componentName}}.tsx', // 新增的文件的目标路径
          templateFile: 'plop-templates/component.hbs', // 新增文件中的内容要来自此处指定的模板内容
        },
        {
          type: 'add', // 程序要新增文件
          path: 'src/pages/{{componentName}}/{{componentName}}.scss', // 新增的文件的目标路径
          templateFile: 'plop-templates/component.scss.hbs', // 新增文件中的内容要来自此处指定的模板内容
        },
      ],
    });
};
