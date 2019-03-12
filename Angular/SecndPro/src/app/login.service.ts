import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { 
  }
  public authenticate(login,password):boolean{
    if(login=="astha" && password=="1234")
    return true;
    else 
    return false;
  }
}
