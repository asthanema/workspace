import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/interfaces';
// import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
  if(sessionStorage.getItem("pass")=="astha")
  return true;
let pass=prompt("PassCode?");
if(pass=="astha")
{
sessionStorage.setItem("pass",pass)
  return true;
}
else
return false;
}
}