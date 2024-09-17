export class Product {
    id: string;
    name: string;
    category: string;
    price: number;
    stock: number;
    description: string;
    brand: string;

    constructor(id: string, name: string, category: string, price: number, stock: number, description: string,brand: string) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.stock = stock;
        this.price = price;
        this.description = description;
        this.brand = brand;
    }
}