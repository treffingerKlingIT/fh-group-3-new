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
    path: 'examples',
    loadChildren: () => import('./pages/examples/tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'example-names',
    loadChildren: () => import('./pages/examples/names/names.module').then( m => m.NamesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'example-photos',
    loadChildren: () => import('./pages/examples/photos/photos.module').then( m => m.PhotosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'example-offline-names',
    loadChildren: () => import('./pages/examples/offline-names/offline-names.module').then( m => m.OfflineNamesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'whisper-ai',
    loadChildren: () => import('./pages/examples/whisper-ai/whisper-ai.module').then( m => m.WhisperAiPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tabs/tab1',
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
