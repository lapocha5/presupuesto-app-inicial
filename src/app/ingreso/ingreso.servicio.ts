import { Ingreso } from './ingreso.model';
export class IngresoServicio{
  Ingreso: Ingreso[]=[
    new Ingreso("Salario", 4000),
    new Ingreso("Venta coche", 500)
  ];

  eliminar(ingreso: Ingreso){
    const indice: number = this.Ingreso.indexOf(ingreso);
    this.Ingreso.splice(indice,1);
  }

}
