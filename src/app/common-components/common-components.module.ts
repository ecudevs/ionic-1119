import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { ProductoListComponent } from "../producto/producto-list/producto-list.component";
import { ProductoCardComponent } from "../producto/producto-card/producto-card.component";

@NgModule({
  declarations: [ProductoListComponent, ProductoCardComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [ProductoListComponent, ProductoCardComponent]
})
export class CommonComponentsModule {}
