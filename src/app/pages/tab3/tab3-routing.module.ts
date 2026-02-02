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
  },
  {
    path: 'karaoke',
    loadChildren: () => import('./karaoke/karaoke.module').then( m => m.KaraokePageModule)
  },
  {
    path: 'presentations',
    loadChildren: () => import('./presentations/presentations.module').then( m => m.PresentationsPageModule)
  },
  {
    path: 'crafts',
    loadChildren: () => import('./crafts/crafts.module').then( m => m.CraftsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab3PageRoutingModule {}
