import { Routes } from '@angular/router';
import { Dashboard } from './component/dashboard/dashboard';
import { Home } from './component/home/home';
import { Firstpage } from './component/firstpage/firstpage';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      { path: '', component: Home },
      { path: 'firstpage', component: Firstpage },
    ],
  },
];
