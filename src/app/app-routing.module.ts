import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {EverestListComponent} from './everest-list/everest-list.component';
import {EverestDashboardComponent} from './everest-dashboard/everest-dashboard.component';
import {EverestConfiguratorComponent} from './configuration/everest-configurator/everest-configurator.component';
import {SignUpPageComponent} from './sign-up-page/sign-up-page.component';
import {CrossroadsComponent} from './crossroads/crossroads.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent},
  { path: 'crossroads', component: CrossroadsComponent},
  { path: 'everest/dashboard/:everestName', component: EverestDashboardComponent},
  { path: 'everest/all', component: EverestListComponent},
  { path: 'everest/new', component: EverestConfiguratorComponent},
  { path: 'everest/update/:everestName', component: EverestConfiguratorComponent},
  { path: 'sign-up', component: SignUpPageComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
