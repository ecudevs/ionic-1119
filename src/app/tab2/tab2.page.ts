import { Component } from "@angular/core";
import { ProductoService } from "../services/producto.service";
import {
  AlertController,
  LoadingController,
  ModalController
} from "@ionic/angular";
import { ProductoFormComponent } from "../producto/producto-form/producto-form.component";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  productos: any = [];

  constructor(
    private productoService: ProductoService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public modalController: ModalController
  ) {}

  ionViewDidEnter() {
    this.productoService.getProductos().subscribe((response: any) => {
      this.productos = response.productos;
    });
  }

  async guardarProducto(producto) {
    const loading = await this.loadingController.create({
      spinner: "crescent",
      message: "Por favor espere...",
      translucent: true,
      cssClass: "custom-class custom-loading" // podemos configurar estilos de clase
    });
    await loading.present();

    this.productoService
      .insertarProducto({ ...producto, fotos: [producto.foto] })
      .subscribe(
        (response: any) => {
          loading.dismiss();
          this.showAlert("Guardado");
        },
        error => {
          loading.dismiss();
          this.showAlert(error.message);
        }
      );
  }

  async modificarProducto(producto) {
    const loading = await this.loadingController.create({
      spinner: "crescent",
      message: "Por favor espere...",
      translucent: true,
      cssClass: "custom-class custom-loading" // podemos configurar estilos de clase
    });
    await loading.present();

    this.productoService
      .actualizarProducto({ ...producto, fotos: [producto.foto] })
      .subscribe(
        (response: any) => {
          loading.dismiss();
          this.showAlert("Guardado");
        },
        error => {
          loading.dismiss();
          this.showAlert(error.message);
        }
      );
  }

  async eliminarProducto(_id) {
    const loading = await this.loadingController.create({
      spinner: "crescent",
      message: "Por favor espere...",
      translucent: true,
      cssClass: "custom-class custom-loading" // podemos configurar estilos de clase
    });
    await loading.present();

    this.productoService.eliminarProducto(_id).subscribe(
      (response: any) => {
        loading.dismiss();
        this.showAlert("Eliminado");
      },
      error => {
        loading.dismiss();
        this.showAlert(error.message);
      }
    );
  }

  async showAlert(mensaje) {
    const alert = await this.alertController.create({
      header: "Exito",
      subHeader: "Subtitulo",
      message: mensaje,
      buttons: ["OK"]
    });

    await alert.present();
  }

  async showProductoForm(producto?) {
    const modal = await this.modalController.create({
      component: ProductoFormComponent,
      componentProps: { modelProducto: producto || {} }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();

    if (data) {
      data._id ? this.modificarProducto(data) : this.guardarProducto(data);
    }
  }

  async showConfirmation(producto) {
    const alert = await this.alertController.create({
      header: "Confirmacion!",
      message: "Estas seguro de eliminar este registro?",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "secondary"
        },
        {
          text: "Eliminar",
          handler: () => this.eliminarProducto(producto._id)
        }
      ]
    });

    await alert.present();
  }
}
