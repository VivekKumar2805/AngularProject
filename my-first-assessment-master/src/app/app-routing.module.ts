import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import  {HomeComponent}  from   './home/home.component';
import  {ContactComponent}  from  './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:  '',component:HomeComponent},
  {path:  'contact',component:ContactComponent},
  {path:  'Header',component:HeaderComponent},
  {path:  'Footer',component:FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
