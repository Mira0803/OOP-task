// FoodItem Class
class FoodItem {
    // Static properties
    static totalFoodItems = 0;
    static availableItems = 0;

    constructor(foodId, name, price) {
        this.foodId = foodId;
        this.name = name;
        this.price = price;
        this.isAvailable = true;

        FoodItem.totalFoodItems++;
        FoodItem.availableItems++;
    }

    // Method to update price
    updatePrice(newPrice) {
        this.price = newPrice;
        console.log(`${this.name} price updated to ₦${newPrice}`);
    }

    // Method to mark item unavailable
    markUnavailable() {
        if (this.isAvailable) {
            this.isAvailable = false;
            FoodItem.availableItems--;
            console.log(`${this.name} is now unavailable`);
        }
    }

    // Static method
    static showAvailableItems() {
        console.log(`Available food items: ${FoodItem.availableItems}`);
    }
}


// Customer Class
class Customer {
    // Static property
    static totalCustomers = 0;

    constructor(customerId, name) {
        this.customerId = customerId;
        this.name = name;
        this.cart = [];

        Customer.totalCustomers++;
    }

    // Add item to cart
    addToCart(foodItem) {
        if (foodItem.isAvailable) {
        this.cart.push(foodItem);
        console.log(`${foodItem.name} added to cart`);
        } else {
        console.log(`${foodItem.name} is not available`);
        }
    }

    // Place order
    placeOrder() {
        if (this.cart.length === 0) {
        console.log("Cart is empty!");
        return;
        }

        console.log(`${this.name} placed an order:`);

        this.cart.forEach(item => {
        console.log(`- ${item.name} (₦${item.price})`);
        });

        this.cart = []; // clear cart after order
    }
}


// Example Usage
const food1 = new FoodItem("F001", "Burger", 2500);
const food2 = new FoodItem("F002", "Pizza", 4000);

const customer1 = new Customer("C001", "Miracle");

customer1.addToCart(food1);
customer1.addToCart(food2);

customer1.placeOrder();

FoodItem.showAvailableItems();