import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  // -------------------------------------------------------------------------------------------------------------------
  // Example paths
  // -------------------------------------------------------------------------------------------------------------------

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tabs/tab1',
  },
  {
    path: 'club-page',
    loadChildren: () => import('./pages/tab1/club-page/club-page.module').then(m => m.ClubPagePageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
