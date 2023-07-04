import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { AuthResponse } from '../models/auth.interface';
import { enviroment } from '../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  
  private token = new BehaviorSubject<string>("");
  private tokenData = new BehaviorSubject<any>({});

  constructor(private http:HttpClient,private router:Router,private snackBar:MatSnackBar) {
    // this.checkToken();
   }

  get token$():Observable<string>{
    return this.token.asObservable();
  }
  get tokenData$():Observable<any>{
    return this.tokenData.asObservable();
  }

  // never es cunado no regresa nada
  handleError(error:any):Observable<never>{
    let errorMessage:string = "Ocurrio un error";
    if(error){
      errorMessage = `${error.error.msg}`;
    }

    this.snackBar.open(errorMessage,'',{
      duration: 5 * 1000,
      panelClass:['error-snackbar'],
      horizontalPosition:'right',
      verticalPosition:'top'
    })

    return throwError(errorMessage);
  }

  saveLocalStorage(token:string){
    localStorage.setItem('token',token);
  }

  logout(){
    localStorage.removeItem('token');
    this.token.next("");
    this.tokenData.next(null);
    this.router.navigate(['/login'])
  }

  checkToken(){
    const token = localStorage.getItem("token");
    
    if(!token){
      this.logout();
    }    
    
    const isExpired = helper.isTokenExpired(token);    
    
    if(isExpired){      
      this.logout();
    }

    this.token.next(token!);
    // Renovar los datos del perfil
    const {iat,exp, ...data } = helper.decodeToken(token!);
    console.log(data)
    this.tokenData.next(data);
  }

  register(user:User){
    return this.http.post(`${enviroment.API_URL}/usuario/`,user)  
  }

  login(loginData:any):Observable<AuthResponse>{    
    return this.http.post<AuthResponse>(`${enviroment.API_URL}/`,loginData).
    pipe(map((data:AuthResponse)=>{
      console.log(data)
      if(data.token){
        this.saveLocalStorage(data.token);
        this.token.next(data.token);
        this.router.navigate(['/home']);
        this.checkToken();
      }
      return data;

    }),
    catchError((error)=>this.handleError(error)));
  
  }

}
