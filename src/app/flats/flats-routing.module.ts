import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlatsComponent } from './flats.component';
import { AllFlatsComponent } from './all-flats/all-flats.component';
import { SingleFlatsComponent } from './single-flats/single-flats.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: AllFlatsComponent },
  { path: 'singleFlat/:id', component: SingleFlatsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login/:id', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlatsRoutingModule { }
