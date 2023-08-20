import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private logins  = [
    { emailid: 'vivek123@gmail.com', password : '123' }
  ]
  getLogin(email:any){
    return this.logins.find(x =>x.emailid === email);
  }
}
