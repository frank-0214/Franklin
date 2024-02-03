import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { RegistreService } from '../services/registre.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
 
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  validation_messages = {
    email: [
      { type: "required", message: "El Email es obligatorio." },
      { type: "pattern", message: "El Email ingresado no es valido." }
    ],
    name: [
      { type: "required", message: "El nombre es obligatorio." },
    ],
    last_name: [
      { type: "required", message: "El Apellido es obligatorio." },
    ],
    password: [
      { type: "required", message: "El password es obligatorio." },
      { type: "pattern", message: "El password ingresado no es valido." }
    ],
    confirmation_password: [
      { type: "required", message: "La confirmacion del password es obligatorio." },
      { type: "pattern", message: "El password ingresado no es valido." }
    ],
  };

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private registroService: RegistreService,
    private alertController: AlertController
  ) { 
    this.registerForm = this.formBuilder.group({
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
          )
        ])
      ],
      password: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/), 
        ])
      ],
      confirmation_password: [
        "",
        Validators.compose([
          Validators.required,
          this.matchPasswords.bind(this) 
        ])
      ],
      name: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(2) 
        ])
      ],
      last_name: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(2) 
        ])
      ]
    });
  }

  ngOnInit() {
  }

  matchPasswords(control: FormControl): { [key: string]: boolean } | null {
    const password = this.registerForm?.get('password')?.value;
    const confirmationPassword = control.value;
  
    return password === confirmationPassword ? null : { notMatched: true };
  }

  register() {
    console.log(this.registerForm.value);
  }
  
  async onSubmit() {
    if (this.registerForm.get('password')?.value !== this.registerForm.get('confirmation_password')?.value) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden. Por favor, inténtalo de nuevo.',
        buttons: ['OK']
      });

      await alert.present();

      return;
    }
    
    if (this.registerForm.get('password')?.value !== this.registerForm.get('confirmation_password')?.value) {
      alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
      return;
    }
    
    this.register();
  }  

  goToLogin(){
    this.navCtrl.navigateBack("/login")
  }
}
