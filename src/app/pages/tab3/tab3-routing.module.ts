import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page
  },
  {
    path: 'dinner',
    loadChildren: () => import('./dinner/dinner.module').then( m => m.DinnerPageModule)
  },
  {
    path: 'run',
    loadChildren: () => import('./run/run.module').then( m => m.RunPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab3PageRoutingModule {}
