import { Component } from "@angular/core";


@Component({
    selector:'app-heroe',
        templateUrl: 'heroe.component.html'
})

export class HeroeComponent {


    nombre:String = "iroman";
    edad:number = 50;

  cambiar():String{
      return this.nombre = "Spiderman";
  }




}