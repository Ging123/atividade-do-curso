import { Routes as Endpoints, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Login = lazy(() => import('./UI/pages/Login/Index'));
const SignUp = lazy(() => import('./UI/pages/SignUp/Index'));
const Furniture = lazy(() => import('./UI/pages/Furniture/Index'));
const Admin = lazy(() => import('./UI/pages/Admin/Index'));
const Workers = lazy(() => import('./UI/pages/Workers/Index'));
const Sales = lazy(() => import('./UI/pages/Sales/Index'));
const Orders = lazy(() => import('./UI/pages/Orders/Index'));

const Routes = () => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Endpoints>
        <Route element={<Login/>} path='/'/>
        <Route element={<SignUp/>} path='/signup'/>
        <Route element={<Furniture/>} path='/furniture'/>
        <Route element={<Admin/>} path='/admin'/>
        <Route element={<Workers/>} path='/workers'/>
        <Route element={<Sales/>} path='/sales'/>
        <Route element={<Orders/>} path='orders'/>
      </Endpoints>
    </Suspense>
  );
}

export default Routes;