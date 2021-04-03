import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { ProductServiceService } from './product-service.service';
import { ProductService } from './product.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CardComponent, FormComponent, TableComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductServiceService, ProductService]
})
export class AppModule { }
