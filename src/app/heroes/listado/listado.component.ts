import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes:String[] = ["hulck","spiderma","batman","superman"]
heroeBorrado:String = '' ;

borrar(){
     this.heroeBorrado = this.heroes.shift() || '';
     
}

}
