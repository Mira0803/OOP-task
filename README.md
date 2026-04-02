# 🍔 Food Ordering & Delivery System

## 🧠 Problem Domain Description

### Title
Food Ordering & Delivery System

### Description
This system allows customers to browse food items, place orders, and track their delivery. It manages food listings, customer details, and order processing, ensuring that users can easily request meals while the system keeps track of order status and availability.

---

## 🧩 Class Diagram (Plain Text)

### Class: FoodItem

**Attributes:**
- foodId (String)
- name (String)
- price (Number)

**Methods:**
- updatePrice(newPrice)
- markUnavailable()

---

### Class: Customer

**Attributes:**
- customerId (String)
- name (String)
- cart (Array)

**Methods:**
- addToCart(foodItem)
- placeOrder()

---

## 📊 UML Class Diagram

```mermaid
classDiagram
    class FoodItem {
        +String foodId
        +String name
        +Number price
        +updatePrice(newPrice)
        +markUnavailable()
    }

    class Customer {
        +String customerId
        +String name
        +Array cart
        +addToCart(foodItem)
        +placeOrder()
    }

    Customer --> FoodItem