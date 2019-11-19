import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-producto-form",
  templateUrl: "./producto-form.component.html",
  styleUrls: ["./producto-form.component.scss"]
})
export class ProductoFormComponent implements OnInit {
  categorias: any = [
    { _id: "TECNOLOGIA", descripcion: "TECNOLOGIA" },
    { _id: "HOGAR", descripcion: "HOGAR" },
    { _id: "AUDIO", descripcion: "AUDIO" },
    { _id: "VIDEO", descripcion: "VIDEO" }
  ];

  modelProducto: any = {};

  @Output() guardarProducto = new EventEmitter<any>();

  constructor(public toastController: ToastController) {}

  ngOnInit() {}

  guardar() {
    if (
      !this.modelProducto.producto ||
      this.modelProducto.producto.trim() == ""
    ) {
      this.showMensaje("El nombre del producto es requerido");
      return false;
    }

    if (
      !this.modelProducto.categorias ||
      this.modelProducto.categorias.length == 0
    ) {
      this.showMensaje("Las categorias son requeridas");
      return false;
    }

    this.guardarProducto.next(this.modelProducto);
  }

  async showMensaje(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: "bottom"
    });
    toast.present();
  }
}
