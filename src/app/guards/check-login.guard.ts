import { CanActivateFn, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { Observable, map, take, tap } from 'rxjs';


@Injectable({
  providedIn:'root'
})
export class CheckLoginGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router){
    console.log('guardia')
  }

  canActivate():Observable<boolean> {
      return this.authService.token$.pipe(
        take(1),
        map((token:string) => {
          if(token == ""){
            this.router.navigate(['/login'])
            return false
          }else{
            return true;
          }
          // token == "" ? false :true
        })
      )
      
  }
  
};
