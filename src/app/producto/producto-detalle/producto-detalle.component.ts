import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-producto-detalle",
  templateUrl: "./producto-detalle.component.html",
  styleUrls: ["./producto-detalle.component.scss"]
})
export class ProductoDetalleComponent implements OnInit {
  @Input() producto: any = {};

  cantidad = 1;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  agregarItem() {
    if (this.producto.stock >= this.cantidad + 1) {
      this.cantidad++;
    }
  }

  quitarItem() {
    if (this.cantidad - 1 >= 1) {
      this.cantidad--;
    }
  }

  agregarAlCarrito() {
    this.modalController.dismiss({
      producto: this.producto,
      cantidad: this.cantidad
    });
  }

  onClose() {
    this.modalController.dismiss();
  }
}
