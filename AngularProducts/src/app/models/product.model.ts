export class Product{

  code: String;
  name: String;
  price: number;
  units: number;

  constructor(code: String, name: String, price: number, units: number){
    this.code=code,
    this.name=name,
    this.price=price,
    this.units=units
  }

}
