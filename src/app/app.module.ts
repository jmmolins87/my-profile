import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ROUTES } from '@angular/router';

// ***** http *****
import { HttpClientModule } from '@angular/common/http';

// ***** Components *****
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ToolsComponent } from './components/tools/tools.component';

// ***** Animation Browser *****
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ***** Angular Material *****
import { MaterialModule } from './material';

// ***** ngx-bootstrap *****
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HistoryComponent } from './components/history/history.component';
import { ContactComponent } from './components/contact/contact.component';
import { WebComponent } from './components/web/web.component';
import { GraphicComponent } from './components/graphic/graphic.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'tools', component: ToolsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ToolsComponent,
    HistoryComponent,
    ContactComponent,
    WebComponent,
    GraphicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    CollapseModule.forRoot(),
    RouterModule.forRoot(
      routes, {
        enableTracing: false,
        anchorScrolling: 'enabled'
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
