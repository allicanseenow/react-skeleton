import { lazy } from 'react';

const Login = lazy(() => import('../views/authentication/login/Login'));
const Register = lazy(() => import('../views/authentication/register/Register'));
const NotFound = lazy(() => import('../views/recycleComponents/notFound/NotFound'));

const PATH = '/authentication';

const prefixPath = (path) => `${PATH}/${path}`;

const authRoutes = [
  { path: prefixPath(''), name: 'Login', redirect: true, pathTo: prefixPath('login'), exact: true },
  { path: prefixPath('login'), name: 'Login', component: Login },
  { path: prefixPath('register'), name: 'Register', component: Register },
  { name: 'Not Found', component: NotFound }
];

export { authRoutes };