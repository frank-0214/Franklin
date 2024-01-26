import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(
    private router:Router,
    private storage: Storage
    ) {}

  goToIntro(){
    console.log("Go to intro");
    this.router.navigateByUrl("/intro");
    this.storage.set('mostrar la intro',true);
  }

}
