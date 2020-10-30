import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SigninIndraComponent } from './signin-indra/signin-indra.component';
import { HomeComponent } from './home/home.component';
import { AccessAccountComponent } from './access-account/access-account.component';

const routes: Routes = [
 {
   path:'sigin-indra',
   component:SigninIndraComponent
   
 },
 {
   path: 'home',
   component: HomeComponent
 },
 { path: '', 
 redirectTo: 'home', 
 pathMatch: 'full' },
 {
   path:'access-account',
   component: AccessAccountComponent
 }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes),
  CommonModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
