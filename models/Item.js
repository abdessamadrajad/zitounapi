class Item {
    constructor(id, quantity, price, customer, items) {
        this.id = id; //String
        this.quantity = quantity; //Int
        this.price = price; //Int
        this.customer = customer; //Customer
        this.items = items //Item
    }
}
module.exports = Item;
