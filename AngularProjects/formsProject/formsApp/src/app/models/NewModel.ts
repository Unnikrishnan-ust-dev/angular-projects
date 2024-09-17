export class NewProduct {
    productId: string;
    description: string;
    brand: string;
    quantity: number;
    price: number;

    constructor(
        productId: string,
        description: string,
        brand: string,
        quantity: number, 
        price: number
    ) {
        this.productId = productId;
        this.brand = brand;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
    }
}