import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MylogsComponent } from './pages/mylogs/mylogs.component';

const routes: Routes = [{
  path: "**",
  component: MylogsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
