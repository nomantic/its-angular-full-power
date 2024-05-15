import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "registration", component: RegistrationPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
