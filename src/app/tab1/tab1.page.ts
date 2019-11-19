import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ProductoDetalleComponent } from "../producto/producto-detalle/producto-detalle.component";
import { CarritoComponent } from "../producto/carrito/carrito.component";
import { ProductoService } from "../services/producto.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  productos: any = [];

  productosFiltrados = [];

  carrito: any = [];

  cantidadItems = 0;

  constructor(
    private productoService: ProductoService,
    public modalController: ModalController
  ) {}

  ionViewDidEnter() {
    this.productoService.getProductos().subscribe((response: any) => {
      this.productos = response.productos;
      this.productosFiltrados = this.productos;
    });
  }

  filtrar(e) {
    let valorAEncontrar = e.detail.value;
    this.productosFiltrados = this.productos.filter(itemProducto => {
      return (
        itemProducto.producto
          .toLowerCase()
          .indexOf(valorAEncontrar.toLowerCase()) != -1
      );
    });
  }

  async openDetailInfo(producto) {
    const modal = await this.modalController.create({
      component: ProductoDetalleComponent,
      componentProps: { producto: producto }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();

    if (data) {
      this.carrito.push(data);
      this.contarItems();
    }
  }

  async openCarrito() {
    const modal = await this.modalController.create({
      component: CarritoComponent,
      componentProps: { productos: this.carrito }
    });
    await modal.present();
  }

  contarItems() {
    let cantidad = 0;
    this.carrito.forEach(producto => {
      cantidad += producto.cantidad;
    });

    this.cantidadItems = cantidad;
  }
}
