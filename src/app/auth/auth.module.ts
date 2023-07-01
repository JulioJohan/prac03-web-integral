import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../materila.module';
import { enviroment } from '../environments/environment';
import { RecaptchaV3Module,RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';



@NgModule({
  declarations: [
    LoginComponent
  ],
  exports:[
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,    
    MatDialogModule,  
    MaterialModule,
    RecaptchaV3Module
  ],
  providers: [{
    provide: RECAPTCHA_V3_SITE_KEY,    
    useValue:enviroment.recaptcha.siteKey
  }] 
  

})
export class AuthModule { }
