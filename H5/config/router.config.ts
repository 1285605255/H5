export default [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        // Home
        {
          path: '/',
          component: './index.tsx',
          // routes: [ ],
        },
        // {
        //   path: '/error/',
        //   component: './abnormal/error.tsx',
        // },
        // {
        //   path: '*',
        //   component: './404.tsx',
        // },
      ],
    },
  ]