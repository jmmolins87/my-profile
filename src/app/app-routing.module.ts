import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ToolsComponent } from './components/tools/tools.component';
import { HistoryComponent } from './components/history/history.component';
import { GraphicComponent } from './components/graphic/graphic.component';
import { WebComponent } from './components/web/web.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'graphic', component: GraphicComponent },
  { path: 'web', component: WebComponent },
  { path: 'contact', component: ContactComponent },
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
