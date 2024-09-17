export class ProductFormBuilder {
    productId: string;
    description: { age: number, seasons: string[] };
    brand: string;
    quantity: number;
    price: number;
    suppliers: string[];

    constructor(
        productId: string,
        description: { age: number, seasons: string[] },
        brand: string,
        quantity: number, 
        price: number, 
        suppliers: string[]
    ) {
        this.productId = productId;
        this.brand = brand;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
        this.suppliers = suppliers;
    }
}