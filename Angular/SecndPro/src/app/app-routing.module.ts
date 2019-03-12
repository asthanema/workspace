import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { SigninComponent } from 'src/app/signin/signin.component';
import { PagenotfoundComponent } from 'src/app/pagenotfound/pagenotfound.component';
import { UserComponent } from 'src/app/user/user.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:"full"},
  {path:'signin',component:SigninComponent},
  {path:'users',component:UserComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
