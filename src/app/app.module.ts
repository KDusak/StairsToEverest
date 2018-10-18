import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';
import { EverestDashboardComponent } from './everest-dashboard/everest-dashboard.component';
import { EverestConfiguratorComponent } from './configuration/everest-configurator/everest-configurator.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { EverestListComponent } from './everest-list/everest-list.component';
import { CrossroadsComponent } from './crossroads/crossroads.component';
import { EverestFormComponent } from './configuration/everest-form/everest-form.component';
import { GeolocationFormComponent } from './configuration/geolocation-form/geolocation-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    EverestDashboardComponent,
    EverestConfiguratorComponent,
    SignUpPageComponent,
    EverestListComponent,
    CrossroadsComponent,
    EverestFormComponent,
    GeolocationFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
