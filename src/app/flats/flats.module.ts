import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlatsRoutingModule } from './flats-routing.module';
import { FlatsComponent } from './flats.component';
import { AllFlatsComponent } from './all-flats/all-flats.component';
import { SingleFlatsComponent } from './single-flats/single-flats.component';
import { LayoutModule } from '../layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipe/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    FlatsComponent,
    AllFlatsComponent,
    SingleFlatsComponent,
    FilterPipe,
    RegisterComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FlatsRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FlatsModule { }
