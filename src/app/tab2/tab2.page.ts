import { Component } from "@angular/core";
import { ProductoService } from "../services/producto.service";
import { AlertController, LoadingController } from "@ionic/angular";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  constructor(
    private productoService: ProductoService,
    public alertController: AlertController,
    public loadingController: LoadingController
  ) {}

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

  async showAlert(mensaje) {
    const alert = await this.alertController.create({
      header: "Exito",
      subHeader: "Subtitulo",
      message: mensaje,
      buttons: ["OK"]
    });

    await alert.present();
  }
}
