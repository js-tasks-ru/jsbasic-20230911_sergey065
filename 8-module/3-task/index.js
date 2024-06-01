export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {

    if(!product) {
      return;
    }

    if(this.cartItems.length == 0) {
      let obj = {};
      obj.product = product;
      obj.count = 1;
      this.cartItems.push(obj);
    } else {
      let mas = [];
      for (let dish of this.cartItems) {
        if (dish.product.name) {
          mas.push(dish.product.name);
        }
      }
      if (!mas.includes(product.name)) {
        let obj = {};
        obj.product = product;
        obj.count = 1;
        this.cartItems.push(obj);
      } else {
        for (let dish of this.cartItems) {
          if (dish.product.name == product.name) {
            dish.count += 1;
          }
    }}}

    this.onProductUpdate(this.cartItems);
  }

  updateProductCount(productId, amount) {
    for (let cartItem of this.cartItems) {
        
      if (cartItem.product.id == productId) {
        if (amount == 1) {
        cartItem.count++;
      }
      else {cartItem.count--;
        if (cartItem.count == 0) {
        this.cartItems.splice(this.cartItems.indexOf(cartItem), 1);
        }   
      }
     }

     this.onProductUpdate(this.cartItems);
    }
  }

  isEmpty() {
    return this.cartItems.length == 0 ? true : false;
  }

  getTotalCount() {
    let totalCount = 0;
    for (let cartItem of this.cartItems) {
      totalCount += cartItem.count;
    }
    return totalCount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (let cartItem of this.cartItems) {
      totalPrice += (cartItem.count * cartItem.product.price);
    }
    return totalPrice;
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }

}

