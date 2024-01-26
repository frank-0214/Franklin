import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  loginUser(credential: any){
    return new Promise((accept, reject) => {
      if(
        credential.email == 'frankramos.0214@gmail.com' 
        && credential.password == 'Frank0214'
        ){
        accept('Login correcto');
      }else{
        reject('Login incorrecto');
      }
    });
  }

  registerUser(){
    //TODO
  }

}
