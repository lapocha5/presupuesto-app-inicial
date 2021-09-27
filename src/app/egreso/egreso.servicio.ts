import { Egreso } from './egreso.model';
export class EgresoServicio{
  Egreso: Egreso[]=[
    new Egreso("Renta Dpto", 900),
    new Egreso("Ropa", 200)
  ];

  eliminar(egreso: Egreso){
    const indice: number = this.Egreso.indexOf(egreso);
    this.Egreso.splice(indice,1);
  }

}
