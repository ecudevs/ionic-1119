import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab1Page } from "./tab1.page";
import { ProductoCardComponent } from "../producto/producto-card/producto-card.component";
import { ProductoListComponent } from "../producto/producto-list/producto-list.component";
import { ProductoDetalleComponent } from "../producto/producto-detalle/producto-detalle.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: "", component: Tab1Page }])
  ],
  declarations: [
    Tab1Page,
    ProductoCardComponent,
    ProductoListComponent,
    ProductoDetalleComponent
  ],
  entryComponents: [ProductoDetalleComponent]
})
export class Tab1PageModule {}
