import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CakeDetailComponent } from './cakes/cake-detail/cake-detail.component';
import { CakesComponent } from './cakes/cakes.component';
import { ContactComponent } from './core/contact/contact.component';
import { HomeComponent } from './core/home/home.component';
import { ProfileComponent } from './core/profile/profile.component';

const routes: Routes = [{path:"home", component: HomeComponent},
{path:"cakes", component: CakesComponent},
{path:"cakes/:id", component: CakeDetailComponent},
{path:"contact", component: ContactComponent},
{path:"profile", component: ProfileComponent},
{path:"", redirectTo: "/home", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
