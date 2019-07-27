import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'home',
  loadChildren: () => import('./public/public.module').then(mod => mod.PublicModule)
}, {
  path: 'mylogs',
  loadChildren: () => import('./users/users.module').then(mod => mod.UsersModule)
}, {
  path: '**',
  redirectTo: '/home'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
