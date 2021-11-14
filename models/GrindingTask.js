class GrindingTask {
    constructor(id,customer,state,quantity,product,grindingPrice,createdAt,updatedAt) {
        this.id = id;
        this.customer = customer;
        this.state = state;
        this.quantity = quantity;
        this.product = product;
        this.grindingPrice = grindingPrice;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

module.exports = GrindingTask;

// String
// Customer
// State // String
// Float
// Float?
// Float
// Date
// Date