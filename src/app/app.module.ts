import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './core/home/home.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { ProfileComponent } from './core/profile/profile.component';
import { ContactComponent } from './core/contact/contact.component';
import { CakesComponent } from './cakes/cakes.component';
import {HttpClientModule} from '@angular/common/http';
import { CakeDetailComponent } from './cakes/cake-detail/cake-detail.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
     HomeComponent,
    NavBarComponent,
    ProfileComponent,
    ContactComponent,
    CakesComponent,
    CakeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
