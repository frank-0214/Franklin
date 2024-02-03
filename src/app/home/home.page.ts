import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  event_list: any;
  categoria_list: any;

  constructor(
    private router:Router,
    private storage: Storage,
    private events: EventsService,
    ) {}

    ionViewDidEnter(){
      this.events.getEvents().then(
        res =>{
          this.event_list = res;
          console.log("Eventos desde el servidor",this.event_list)
        }
        )
        console.log("Local Events",this.events.getLocalEvents().events);

        this.events.getTodasCategorias().then(
          res =>{
            this.categoria_list = res;
            console.log("Categorias del servidor",this.categoria_list)
          }
          )
        
          const categoriaId=1;
          this.events.getCategoriaId(categoriaId).then(
            categoria =>{
              this.categoria_list = categoria;
              console.log("Categorias del servidor ID",this.categoria_list)
            }
            )

      }
    
  goToIntro(){
    console.log("Go to intro");
    this.router.navigateByUrl("/intro");
    this.storage.set('mostrar la intro',true);
  }

}
