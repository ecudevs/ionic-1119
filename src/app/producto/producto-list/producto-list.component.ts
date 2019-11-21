import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-producto-list",
  templateUrl: "./producto-list.component.html",
  styleUrls: ["./producto-list.component.scss"]
})
export class ProductoListComponent implements OnInit {
  @Input() productos: any = [];
  @Output() productoClick = new EventEmitter<any>();
  @Output() eliminarClick = new EventEmitter<any>();
  @Output() editarClick = new EventEmitter<any>();

  showEliminar = false;
  showEditar = false;

  constructor() {}

  ngOnInit() {
    this.showEliminar = this.eliminarClick.observers.length > 0;
    this.showEditar = this.editarClick.observers.length > 0;
  }

  onClickProducto(producto) {
    this.productoClick.next(producto);
  }

  onEditarClick(producto) {
    this.editarClick.next(producto);
  }

  onEliminarClick(producto) {
    this.eliminarClick.next(producto);
  }
}
