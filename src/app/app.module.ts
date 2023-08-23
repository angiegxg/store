import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { productReduceder } from './state/reducer';
import { HomeComponent } from './pages/home/home.component'; // Asegúrate de tener el nombre correcto aquí
import { GetProductsService } from './services/get-products.service';
import { HeaderComponent } from './components/header/header.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { ButtonShoppingComponent } from './components/button-shopping/button-shopping.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { DatailComponent } from './pages/datail/datail.component';
import { GetProductByIdService } from './services/get-product-by-id.service';
import { ShoopingComponent } from './pages/shooping/shooping.component';
import { ButtonShoppingCounterComponent } from './components/button-shopping-counter/button-shopping-counter.component';
import { CardShoppingComponent } from './components/card-shopping/card-shopping.component';
import { TotalComponent } from './components/total/total.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ListProductsComponent,
    CardProductComponent,
    ButtonShoppingComponent,
    StarRatingComponent,
    DatailComponent,
    ShoopingComponent,
    ButtonShoppingCounterComponent,
    CardShoppingComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ productsState: productReduceder }), 
    StoreDevtoolsModule.instrument()
  ],
  providers: [GetProductsService, GetProductByIdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
