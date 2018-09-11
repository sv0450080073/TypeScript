class Product <A,B,C> {
    id:A;
    name:B;
    price:C;
    constructor(id:A,name:B,price:C)
    {
        this.id=id;
        this.name=name;
        this.price=price;
    }
    ShowProduct()
    {
        console.log(`${this.id} - ${this.name} - ${this.price} `);
    }
}
let product1= new Product<string,number,number>("123",8,256);
let product2 =new Product<boolean,string,number>(true,"manh",256);
product1.ShowProduct();
product2.ShowProduct();