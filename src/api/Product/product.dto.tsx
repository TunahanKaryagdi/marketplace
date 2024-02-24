

export class ProductDto{
    id: number;
    price: string;
    title: string;
    category: string;
    description: string;
    image: string;

    constructor(id: number, price: string, title: string, category: string, description: string, image: string) {
        this.id = id;
        this.price = price;
        this.title = title;
        this.category = category;
        this.description = description;
        this.image = image;
    }
}


