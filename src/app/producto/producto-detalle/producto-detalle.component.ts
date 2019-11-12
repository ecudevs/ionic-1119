import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-producto-detalle",
  templateUrl: "./producto-detalle.component.html",
  styleUrls: ["./producto-detalle.component.scss"]
})
export class ProductoDetalleComponent implements OnInit {
  @Input() producto: any = {};

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor() {}

  ngOnInit() {}
}
