import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'flats', loadChildren: () => import('./flats/flats.module').then(m => m.FlatsModule) },
{path:"",redirectTo:'flats',pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
