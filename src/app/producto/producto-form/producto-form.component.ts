import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { ToastController, ModalController } from "@ionic/angular";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";

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

  @Input() modelProducto: any = {};

  @Output() guardarProducto = new EventEmitter<any>();

  constructor(
    public toastController: ToastController,
    public modalController: ModalController,
    private camera: Camera
  ) {}

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

    this.modalController.dismiss(this.modelProducto);
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

  ejecutarCamara() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(
      imageData => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.modelProducto.foto = "data:image/jpeg;base64," + imageData;
      },
      err => {
        // Handle error
      }
    );
  }
}
