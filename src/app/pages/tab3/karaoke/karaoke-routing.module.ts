import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KaraokePage } from './karaoke.page';

const routes: Routes = [
  {
    path: '',
    component: KaraokePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KaraokePageRoutingModule {}
