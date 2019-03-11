import AuthLayout from '../layouts/AuthLayout';
import FullLayout from '../layouts/FullLayout';

const indexRoutes = [
  { path: '/authentication', name: 'Authentication', component: AuthLayout },
  { path: '/', name: 'Home Page', component: FullLayout }
];

export { indexRoutes };