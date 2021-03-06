export class Product {
    id: number = 0;
    catId: number = 0;
    title: string = '';
    author: string = '';
    description: string = '';
    image: string = '';
    price: number = 0;
    stock: number = 0;
    featured: boolean = false;
    active: boolean = false;
    action: boolean = false;

    constructor(properties?: Product) {
        if (properties) {
            this.id = properties.id || 0;
            this.catId = properties.catId || 0;
            this.title = properties.title || '';
            this.author = properties.author || '';
            this.description = properties.description || '';
            this.image = properties.image || '';
            this.price = properties.price || 0;
            this.stock = properties.stock || 0;
            this.featured = properties.featured || false;
            this.active = properties.active || false;
            this.action = properties.action || false;
        }
    }
}
