import { Routes } from '@angular/router';
import { WelcomePage } from './domain/welcome-page/welcome-page.component';
import { HeaderLayout } from './infrastructure/layout/header-layout/header-layout';
import { ListEndpointsPage } from './domain/list-endpoints-page/list-endpoints-page.component';

export const routes: Routes = [
  {
    path: '',
    component: WelcomePage
  },
  {
    path: 'admin',
    component: HeaderLayout,
    children: [
      { path: 'endpoints', component: ListEndpointsPage },
    ]
  }
];
