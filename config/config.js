export default {
  /* 约定的存放页面代码的文件夹是 pages 还是 page。不配置是pages */
  singular: true,
  /* 插件 */
  plugins: [
    ['umi-plugin-react', {
      /* 添加插件相关配置 */
      antd: true
    }]

  ],
  /* component 是相对于 page 目录的相对路径 */
  routes: [
    {
      path: '/',
      component: '../layout',
      routes: [
        {
          path: '/',
          redirect: '/helloword'
          // component: 'HelloWord'
        },
        {
          path: '/helloword',
          component: 'HelloWord'
        },
        {
          path: '/dashboard',
          routes: [
            {
              path: '/dashboard/analysis',
              component: './Dashboard/Analysis'
            },
            {
              path: '/dashboard/monitor',
              component: './Dashboard/Monitor'
            },
            {
              path: '/dashboard/workspace',
              component: './Dashboard/Workspace'
            }
          ]
        },
        {
          path: '/404',
          component: '404'
        }
        
      ]
    }
  ]

};