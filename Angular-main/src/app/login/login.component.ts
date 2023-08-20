import { Component } from '@angular/core';
import  {NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userId: string = '';
  password: string = '';
  
  login()
  {//you can umplement your login logic here
    console.log('User ID:', this.userId);
    console.log('Password:', this.password);

  }

}
