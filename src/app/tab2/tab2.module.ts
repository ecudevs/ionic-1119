import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab2Page } from "./tab2.page";
import { ProductoFormComponent } from "../producto/producto-form/producto-form.component";
import { CommonComponentsModule } from "../common-components/common-components.module";

@NgModule({
  imports: [
    CommonComponentsModule,
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: "", component: Tab2Page }])
  ],
  entryComponents: [ProductoFormComponent],
  declarations: [Tab2Page, ProductoFormComponent]
})
export class Tab2PageModule {}
