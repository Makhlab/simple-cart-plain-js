class Storage {

    static saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    static getCart() {
       return localStorage.getItem('cart');
    }
}
