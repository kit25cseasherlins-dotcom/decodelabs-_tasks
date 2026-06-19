const express = require('express');

const app = express();
app.use(express.json());

const PORT = 3000;

const foods = [
    { id: 1, name: "Pizza", price: 200 },
    { id: 2, name: "Burger", price: 120 },
    { id: 3, name: "Pasta", price: 180 },
    { id: 4, name: "Sandwich", price: 100 },
    { id: 4, name: "Sandwich", price: 100 },
    { id: 5, name: "Idli", price: 8 },
{ id: 6, name: "Dosa", price: 15 },
{ id: 7, name: "Puri", price: 20 }
];

const orders = [];

// GET /foods
app.get('/foods', (req, res) => {
    res.json(foods);
});

app.post('/orders', (req, res) => {
    console.log(req.body);

    const { familyName, items } = req.body;

    // Validate family name
    if (!familyName) {
        return res.json({
            message: "Family name is required"
        });
    }

    // Validate items
    if (!items || items.length === 0) {
        return res.json({
            message: "At least one family member order is required"
        });
    }

    // Validate each member
    for (const member of items) {

        if (!member.customerName) {
            return res.json({
                message: "Customer name is required"
            });
        }

        if (!member.foodItems || member.foodItems.length === 0) {
            return res.json({
                message: `Food items are required for ${member.customerName}`
            });
        }

        // Validate each food item
        for (const item of member.foodItems) {

            const foodExists = foods.find(
                food => food.name === item.foodName
            );

            if (!foodExists) {
                return res.json({
                    message: `${item.foodName} is not available`
                });
            }

            if (item.quantity <= 0) {
                return res.json({
                    message: `Quantity for ${item.foodName} must be greater than 0`
                });
            }
        }
    }

    // Save family order
    orders.push({
        familyName,
        items
    });

    res.json({
        message: "Family order placed successfully"
    });

});
// GET /orders
app.get('/orders', (req, res) => {
    res.json(orders);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});