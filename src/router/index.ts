import loadable from '@loadable/component';
import { RouteConfig } from 'react-router-config';

import Layout from '@/layout';
import Home from '@/pages/home';
import Vite from '@/pages/vite';

const routesConfig: RouteConfig[] = [
  // APP 路由
  {
    component: Layout,
    routes: [
      {
        exact: true,
        path: '/',
        component: Home,
        name: 'home',
      },
      {
        path: '/vite',
        component: Vite,
        name: 'vite',
      },
      {
        path: '*',
        exact: false,
        name: 'home',
        component: loadable(() => import('@/pages/home')),
      },
    ],
  },
];

export default routesConfig;
