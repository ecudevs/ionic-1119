import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductoService {
  constructor(private http: HttpClient) {}

  getProductos() {
    return this.http.get("http://localhost:9000/productos");
  }

  insertarProducto(producto) {
    return this.http.post("http://localhost:9000/producto", producto);
  }
}