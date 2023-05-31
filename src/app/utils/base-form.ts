import {Injectable} from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Injectable({providedIn:'root'})
export class BaseForm {
    constructor(){}

    isValidField(formulario:AbstractControl|null){
        let flag:boolean = false;
        if(formulario != null){
            flag = formulario.touched || formulario.dirty && !formulario.valid;
        } 
        return flag;
    }

    getErrorMessage(formulario:AbstractControl | null){
        let message:string = "";
        if(formulario){
            const {errors} = formulario;
            if(errors){
                const messages:any = {
                    required: 'Campo Requerido',
                    email:'Formato inválido',
                    pattern:'Formato inválido',
                    minError:'El rango no es correcto',
                    minlength:'El rango no es correcto',
                    max:'El rango no es correcto'
                }
                const errorkey = Object.keys(errors).find(Boolean);
                if(errorkey){
                    message = messages[errorkey];
                }
            }
        }
        return message;
    }
}