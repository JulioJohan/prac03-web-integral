import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BaseForm } from 'src/app/utils/base-form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  constructor(private authService:AuthService,private formBuilder:FormBuilder, private router:Router,
    private snackBar:MatSnackBar,public baseForm:BaseForm){
    
  }
  formRegister = this.formBuilder.group({
    name: ['',[Validators.required,Validators.minLength(3)]],
    lastname:['',[Validators.required,Validators.minLength(3)]],
    username:['',[Validators.required,Validators.minLength(3)]],
    password:['',[Validators.required,Validators.minLength(5)]],
    role:['',[Validators.required]]
  })
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  register(){
    const user = new User();
    user.name = this.formRegister.value.name!
    user.lastname = this.formRegister.value.lastname!
    user.username = this.formRegister.value.username!
    user.password = this.formRegister.value.password!
    user.role = this.formRegister.value.role!
    this.authService.register(user).subscribe({
     next:(data:any)=>{
      console.log(data)
      this.snackBar.open(data.msg,'',{
        duration: 5 * 1000,
        panelClass:['success-snackbar'],
        horizontalPosition:'right',
        verticalPosition:'top'
      })
      this.router.navigate(['/login'])        
     },
     error:(data:any)=>{
      console.log(data)
      this.snackBar.open(data.error.msg,'',{
        duration: 5 * 1000,
        panelClass:['error-snackbar'],
        horizontalPosition:'right',
        verticalPosition:'top'
      })
    }
     
    })  
  }

  login(){
    this.router.navigate(['/login'])        
  }
}
