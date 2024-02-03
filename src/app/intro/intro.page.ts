import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
      title: "Bienvenidos",
      description:"Hotel Wyndham garden es un hotel que esta ubicado en la zona norte de la ciudad de barranquilla mas exactamente en la Cll 87 # 47 -88, A continuacion les mostraremos nuestros servicios prestados.",
      image: "../../assets/image/FACHADA.JPG",
      help_text:"Darle swape",
      class: "slide-1"
    },
    
    {
      title: "Habitación Estándar Queen",
      description:"Contamos con 33 habitaciones Estándar Queen con aproximadamente 24 metros cuadrados. Dotadas con una cama Queen size de 2,00 mt, aire acondicionado, televisión satelital, internet, llamadas locales ilimitadas y 10 minutos gratis en llamadas nacionales.",
      image: "../../assets/image/1 King Room 3.jpg",
      help_text:"Darle swape",
      class: "slide-2"
    },
    
    {
      title: "Zona Humeda",
      description:"Ponemos a su disposición una zona húmeda ubicada en el décimo piso del hotel, en ella podrá acceder a los servicios de sauna, las esencias de nuestro baño turco, jacuzzis con hidromasajes y mantenerse en forma en nuestra zona fitness. El lugar se encuentra disponible de 9:00 a.m. – 9:00 p.m.",
      image: "../../assets/image/zonahumeda.jpg",
      help_text:"Darle swape",
      class: "slide-3"
    },
    
    {
      title: "Bar Puerto Mojito",
      image: "../../assets/image/puertomojito.jpg",
      description:"El mejor lugar para terminar un día de trabajo. Disfrutando de una buena musica y excelentes cocteles. <br></br><br> <b>El Horario de Lunes a Sábados es de 2:00 pm a 11:00 pm </br><br> Domingos y Festivos no hay servicio</b>",
      help_text:"Darle swape",
      class: "slide-4"
    }
    ]
    
  constructor(
    private router:Router,
    private storage: Storage
    ) { }
  
  goToHome(){
    console.log("Go to Home");
    this.router.navigateByUrl("/home");
  }

  ionViewDidEnter(){
    console.log("Ya entre y vi la intro");
    //this.router.navigateByUrl("/home");
    this.storage.set('Ya yo vi la intro',false);
  
  }
  ngOnInit() {
  }

}
