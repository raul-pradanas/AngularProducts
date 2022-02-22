import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProducts';

  products: Product[] = [
    {
      code: "457hkns8",
      name: "Pack Palmeritas",
      price: 1.80,
      units: 2
    },
    { code: "12ti5n5g", name: "Brick Leche", price: 1.20, units: 6},
    { code: "2151ead5", name: "Botella 2L Coca Cola", price: 2.50, units: 1},
  ];

  getTotalPrice(): number{
    let total = 0;
    for(let i=0; i<this.products.length; i++){
      total += this.products[i].price * this.products[i].units;
    }
    return total
  }

   constructor(){
     console.log(this.getTotalPrice());
   }
}
