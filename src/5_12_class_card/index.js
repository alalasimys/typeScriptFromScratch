"use strict";
class Product {
    constructor(id, tile, price) {
        this.id = id;
        this.tile = tile;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    constructor(date, address) {
        super(date);
        this.date = date;
    }
}
class ShopDelivery extends Delivery {
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProduct(productID) {
        this.products = this.products.filter((product) => product.id !== productID);
    }
    getSum() {
        return this.products
            .map((product) => product.price)
            .reduce((p1, p2) => p1 + p2);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkOut() {
        if (this.products.length === 0) {
            throw new Error('No product added');
        }
        if (!this.delivery) {
            throw new Error("Delivery option wasn't chosen");
        }
        return { success: true };
    }
}
const cart = new Cart();
cart.addProduct(new Product(1, 'Cookie', 10));
cart.addProduct(new Product(2, 'Cake', 50));
cart.addProduct(new Product(3, 'Chocolate', 20));
cart.deleteProduct(1);
cart.setDelivery(new HomeDelivery(new Date(), 'Odessa'));
console.log(cart.getSum());
console.log(cart.checkOut());
