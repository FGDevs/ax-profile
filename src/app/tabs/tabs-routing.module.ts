import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { TabsPage } from './tabs.page';
import { TabDataKey } from 'src/interfaces';

interface CustomRoute extends Route {
  data?: TabDataKey;
}

interface CustomRoutes extends Route {
  children?: CustomRoute[];
}

const routes: CustomRoutes[] = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule),
        data: { title: 'Beranda' }
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule),
        data: { title: 'Booking Order' }
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule),
        data: { title: 'Create Order' }
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule),
        data: { title: 'Payment' }
      },
      {
        path: 'tab5',
        loadChildren: () => import('../tabAccount/tab-account.module').then(m => m.TabAccountPageModule),
        data: { title: 'Akun' }
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
