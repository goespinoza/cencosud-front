import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClimaComponent } from './components/clima/clima.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/clima',
    pathMatch: 'full'
  },
  {
    path: 'clima',
    component: ClimaComponent
  },
  {
    path: 'error/404',
    component: NotfoundComponent
  },
  {
    path: '**',
    redirectTo: 'error/404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
