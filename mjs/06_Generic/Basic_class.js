class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    ShowProduct() {
        console.log(`${this.id} - ${this.name} - ${this.price} `);
    }
}
let product1 = new Product("123", 8, 256);
let product2 = new Product(true, "manh", 256);
product1.ShowProduct();
product2.ShowProduct();
