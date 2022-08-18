export default [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        exact: true,
        path: '/index',
        component: '@/pages/index/index',
      },
    ],
  },
];
