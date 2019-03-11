import { lazy } from 'react';

const Home = lazy(() => import('../views/home/container/HomeContainer'));
const NotFound = lazy(() => import('../views/recycleComponents/notFound/NotFound'));

const PATH = '';

const prefixPath = (path) => `${PATH}/${path}`;

const fullRoutes = [
  { path: prefixPath(''), name: 'Home Page', component: Home, exact: true },
  { name: 'Not Found', component: NotFound }
];

const defaultRoute = null;

export { fullRoutes, defaultRoute };