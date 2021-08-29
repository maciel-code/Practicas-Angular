import { Component } from '@angular/core'



@Component ({
    selector: 'app-contador',
        template: `
    <h1> {{title}}  </h1>

<h2>La base es: <strong>{{base}}</strong></h2>



<button (click) ="acumular(base)"> + {{base}}</button>


<span> {{numero}} </span>


<button (click) ="acumular (-base)"> - {{base}}</button> `
})


export class ContadorComponent { 
    public title: string = 'Contador App';
numero:number = 100;


acumular(valor:number){
  this.numero +=valor;
}


base:number = 5


}