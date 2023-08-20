import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';  //import your login component


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent        //Add Login Component here
  ],
  imports: [
    BrowserModule,
    FormsModule,           //Add this line
    AppRoutingModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
