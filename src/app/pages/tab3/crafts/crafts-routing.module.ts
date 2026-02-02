import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CraftsPage } from './crafts.page';

const routes: Routes = [
  {
    path: '',
    component: CraftsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CraftsPageRoutingModule {}
