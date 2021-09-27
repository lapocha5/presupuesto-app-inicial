import { Component, OnInit } from "@angular/core";
import { IngresoServicio } from "../ingreso/ingreso.servicio";
import { EgresoServicio } from "../egreso/egreso.servicio";
import { Ingreso } from "../ingreso/ingreso.model";
import { Egreso } from "../egreso/egreso.model";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"],
})
export class FormularioComponent implements OnInit {
  tipo: string = "ingresoOperacion";
  descripcionInput: string;
  valorInput: number;

  constructor(
    private IngresoServicio: IngresoServicio,
    private EgresoServicio: EgresoServicio
  ) {}

  ngOnInit() {}

  tipoOperacion(evento) {
    this.tipo = evento.target.value;
  }

  agregarValor() {
    if (this.tipo === "ingresoOperacion")
      this.IngresoServicio.Ingreso.push(
        new Ingreso(this.descripcionInput, this.valorInput)
      );
    else
      this.EgresoServicio.Egreso.push(
        new Egreso(this.descripcionInput, this.valorInput)
      );
  }
}
