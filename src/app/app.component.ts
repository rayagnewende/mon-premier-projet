import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth= false;
  lastUpdate = new Promise((resolve, reject)=> {

    const date = new Date();
    setTimeout(() =>{
        resolve(date);
    }, 2000) ;

  });
  appareils = [
    {
      name:"machine à laver",
      status:"eteint"
    },
    {
      name:"Ordinateur",
      status:"allumé"
    },
    {
      name:"Frigerateur",
      status:"eteint"
    }

  ];
  constructor()
  {
    setTimeout(()=> {
      this.isAuth = true;
    }, 4000) 
  }

  onAllumer()
  {
    console.log('appareil allumé!');
  }
}
