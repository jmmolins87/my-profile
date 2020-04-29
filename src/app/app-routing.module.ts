import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ToolsComponent } from './components/tools/tools.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tools', component: ToolsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
