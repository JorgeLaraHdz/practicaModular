import { Routes } from '@angular/router';
import { Principal } from './pages/principal/principal';
import { Login } from './pages/login/login';

export const routes: Routes = [
    {path:'principal',component: Principal},
    {path:'login',component: Login},
    {path:'**',redirectTo:'login',pathMatch:'full'}

];
