import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from 'src/app/utils/base-form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private formBuilder:FormBuilder, public baseForm:BaseForm, private router:Router){}
  ngOnInit(): void {
    
  }

  formulario:FormGroup = this.formBuilder.group({
    usuario:['',[Validators.required]],
    password:['',[Validators.required,Validators.minLength(3)]]
  })

  login(){
    this.router.navigateByUrl('/home/home')
  }
}
