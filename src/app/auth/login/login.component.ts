import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from 'src/app/utils/base-form';
import { Router } from '@angular/router';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { AuthService } from '../../services/auth.service';
import { AuthResponse } from 'src/app/models/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  tokenVisible:boolean = false;
  recaptchaToken:string = "";

  constructor(private formBuilder:FormBuilder, public baseForm:BaseForm, private router:Router,
    private recaptchaV3Service:ReCaptchaV3Service,
    private authService:AuthService){}

  ngOnInit(): void {
    
  }

  formulario:FormGroup = this.formBuilder.group({
    username:['',[Validators.required]],
    password:['',[Validators.required,Validators.minLength(3)]]
  })

  login(){
    this.recaptchaV3Service.execute('importantAction').subscribe((token:string)=>{
      this.tokenVisible = true;
      this.recaptchaToken = `Token [${token}] generated` 
      console.log(this.recaptchaToken)
    })
    this.authService.login(this.formulario.value).subscribe({
      next:(data:any)=>{
        console.log(data)
      },
      error:(data:any)=>{
        console.log('error')
        console.log(data)
      }
    })
    // this.router.navigateByUrl('/home/home')
  }
}
