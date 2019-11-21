import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductoService {
  constructor(private http: HttpClient) {}

  // urlBase = "http://localhost:9000";
  urlBase = "https://ion-api1911.herokuapp.com";

  getProductos() {
    return this.http.get(this.urlBase + "/productos");
  }

  insertarProducto(producto) {
    return this.http.post(this.urlBase + "/producto", producto);
  }

  actualizarProducto(producto) {
    return this.http.put(this.urlBase + "/producto", producto);
  }

  eliminarProducto(_id) {
    return this.http.delete(this.urlBase + "/producto/" + _id);
  }
}
