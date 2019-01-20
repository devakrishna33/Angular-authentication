import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CompanionComponent } from './companion/companion.component';

const routes: Routes = [
  {
    path: '', component: DoctorComponent, pathMatch: 'full',
  },
  {
    path: 'doctor', component: DoctorComponent,
  },
  {
    path: 'companion', component: CompanionComponent,
  },
  {
    path: 'register', component: RegisterComponent,
  },
  {
    path: 'login', component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
