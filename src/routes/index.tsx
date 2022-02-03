import { lazy } from 'react';

const Vite = lazy(() => import('@/pages/Vite'));
const Home = lazy(() => import('@/pages/Home'));

export interface IRouteMeta {
  title: string;
  icon?: string;
}

export interface IRouteBase {
  // 路由路径
  path: string;
  // 路由组件
  component?: any;
  exact?: boolean;
  // 302 跳转
  redirect?: string;
  // 路由信息
  meta: IRouteMeta;
  // 是否校验权限, false 为不校验, 不存在该属性或者为true 为校验, 子路由会继承父路由的 auth 属性
  auth?: boolean;
  // 菜单栏中隐藏
  hidden?: boolean;
  // 隐藏的角色
  denyRole?: string[];
  // 隐藏的型号
  denyModel?: string[];
}

export interface IRoute extends IRouteBase {
  children?: IRoute[];
}

const routes: IRoute[] = [
  {
    path: '/vite',
    component: Vite,
    meta: {
      title: '用户路由',
    },
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '用户路由',
    },
  },
  {
    path: '/*',
    meta: {
      title: '错误页面',
    },
    redirect: '/vite',
  },
];

export default routes;
