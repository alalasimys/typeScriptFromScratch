class Product {
  constructor(public id: number, public tile: string, public price: number) {}
}

class Delivery {
  constructor(public date: Date) {}
}

class HomeDelivery extends Delivery {
  constructor(public date: Date, address: string) {
    super(date);
  }
}

class ShopDelivery extends Delivery {
  constructor(public shopId: number) {
    super(new Date());
  }
}

class Cart {
  private products: Product[] = [];
  private delivery: HomeDelivery | ShopDelivery;

  public addProduct(product: Product): void {
    this.products.push(product);
  }

  public deleteProduct(productID: number): void {
    this.products = this.products.filter(
      (product: Product) => product.id !== productID
    );
  }

  public getSum(): number {
    return this.products
      .map((product: Product) => product.price)
      .reduce((p1: number, p2: number) => p1 + p2);
  }

  public setDelivery(delivery: HomeDelivery | ShopDelivery): void {
    this.delivery = delivery;
  }

  public checkOut() {
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
