import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-carrito",
  templateUrl: "./carrito.component.html",
  styleUrls: ["./carrito.component.scss"]
})
export class CarritoComponent implements OnInit {
  @Input() productos: any = [];

  total = 0;

  constructor(public modalController: ModalController) {}

  ngOnInit() {
    this.getTotal();
  }

  getTotal() {
    let total = 0;
    this.productos.forEach(producto => {
      total += producto.cantidad * producto.producto.precio;
    });

    this.total = total;
  }

  onClose() {
    this.modalController.dismiss();
  }
}
