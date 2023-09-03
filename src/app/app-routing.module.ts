import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatailComponent } from './pages/datail/datail.component';
import { HomeComponent } from './pages/home/home.component';
import { ShoopingComponent } from './pages/shooping/shooping.component';
import { BuyComponent } from './pages/buy/buy.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  { path: 'detail/:productId', component: DatailComponent },
  {path:'shopping', component: ShoopingComponent},
  {path:'pay', component: BuyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
