import { Component} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent{

  numero1 = 0;
  numero2 = 0;
  resultado!:number;
  sumar() {
    let resultado = 0;
    this.resultado = this.numero1 + this.numero2;
  }
  restar() {
    let resultado = 0;
    this.resultado = this.numero1 - this.numero2;
  }
  multiplicar() {
    let resultado = 0;
    this.resultado = this.numero1 * this.numero2;
  }
  dividir() {
    let resultado = 0;
    this.resultado = this.numero1 / this.numero2;
  }

}
