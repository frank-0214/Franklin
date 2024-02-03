import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  loginForm: FormGroup; 
  validation_messages = {
    email: [
      { type: "required", message: "El Email es obligatorio." },
      { type: "pattern", message: "El Email ingresado no es valido." }
    ],
    password: [
      { type: "required", message: "El password es obligatorio." },
      { type: "pattern", message: "El password ingresado no es valido." }
    ]
  }
  loginMessage: any;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController,
    private storage: Storage,
    private router: Router
    ) { 
  this.loginForm = this.formBuilder.group({
    email: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.pattern(
          "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
        )
      ])
    ),
    password: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),
      ])
    )
    });
  }

  ngOnInit() {

  }

  login(login_data: any){
    console.log(login_data);
    this.authService.loginUser(login_data).then(res => {
      this.loginMessage = res;
      this.storage.set('userLoggedIn', true);
      this.navCtrl.navigateForward('/home');
    }).catch(err => {
      this.loginMessage = err;
    });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

}


