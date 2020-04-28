import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
