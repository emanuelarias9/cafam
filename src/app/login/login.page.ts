import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import validator from 'validator';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm= new  FormGroup({
    userEmail: new FormControl(''),
    userPassword: new FormControl(''),
  });
  loginFormValidator={
    userEmail:{
      empty:'',
      email:'',
    },
    userPassword:{
      empty:'',
    }
  };
  constructor(private navCtrl:NavController) { }

  ngOnInit(){
  }
    formValidator():boolean{
    if(validator.isEmpty(this.loginForm.value.userEmail)){
      this.loginFormValidator.userEmail.empty='Ingrese una dirección de correo electrónico';
      return false;
    } else{
      this.loginFormValidator.userEmail.empty='';
    }
    if (!validator.isEmail(this.loginForm.value.userEmail)){
      this.loginFormValidator.userEmail.email='La dirección de correo electrónico debe ser valida';
    return false;
    }else{
      this.loginFormValidator.userEmail.email='';
    }

    if(validator.isEmpty(this.loginForm.value.userPassword)){
      this.loginFormValidator.userEmail.empty='Ingrese una contraseña';
      return false;
    } else{
      this.loginFormValidator.userEmail.empty='';
    }
    return true;

    }
    onSubmit(){
      if(this.formValidator()){
        this.navCtrl.navigateForward('/home');
        console.log('Formulario Validado');
      }
    }
}
