import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { Page404Component } from './shared/components/page-404/page-404.component';


const routes: Routes = [
  { path: 'path', redirectTo: 'login', pathMatch: 'full' },
  { path: 'system', loadChildren: './system/system.module#SystemModule'},
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
