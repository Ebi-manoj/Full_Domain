db.orders.insertMany([
  {
    _id: 1,
    customer: { name: 'John Doe', age: 28, city: 'New York' },
    items: [
      { product: 'Laptop', category: 'Electronics', price: 1200, quantity: 1 },
      { product: 'Mouse', category: 'Electronics', price: 25, quantity: 2 },
    ],
    orderDate: ISODate('2025-01-10'),
    status: 'delivered',
    paymentMethod: 'credit_card',
  },
  {
    _id: 2,
    customer: { name: 'Jane Smith', age: 34, city: 'London' },
    items: [
      { product: 'T-Shirt', category: 'Clothing', price: 20, quantity: 3 },
      { product: 'Jeans', category: 'Clothing', price: 45, quantity: 1 },
    ],
    orderDate: ISODate('2025-01-12'),
    status: 'pending',
    paymentMethod: 'paypal',
  },
  {
    _id: 3,
    customer: { name: 'Ali Khan', age: 22, city: 'Dubai' },
    items: [
      {
        product: 'Headphones',
        category: 'Electronics',
        price: 80,
        quantity: 1,
      },
    ],
    orderDate: ISODate('2025-01-15'),
    status: 'delivered',
    paymentMethod: 'debit_card',
  },
  {
    _id: 4,
    customer: { name: 'Maria Garcia', age: 29, city: 'Madrid' },
    items: [
      { product: 'Dress', category: 'Clothing', price: 60, quantity: 2 },
      { product: 'Earrings', category: 'Accessories', price: 15, quantity: 4 },
    ],
    orderDate: ISODate('2025-01-18'),
    status: 'delivered',
    paymentMethod: 'credit_card',
  },
  {
    _id: 5,
    customer: { name: 'David Lee', age: 31, city: 'Singapore' },
    items: [
      {
        product: 'Smartphone',
        category: 'Electronics',
        price: 900,
        quantity: 1,
      },
      { product: 'Charger', category: 'Electronics', price: 30, quantity: 1 },
    ],
    orderDate: ISODate('2025-01-20'),
    status: 'cancelled',
    paymentMethod: 'paypal',
  },
  {
    _id: 6,
    customer: { name: 'Sophia Brown', age: 27, city: 'Toronto' },
    items: [
      { product: 'Sneakers', category: 'Footwear', price: 70, quantity: 1 },
      { product: 'Socks', category: 'Footwear', price: 5, quantity: 5 },
    ],
    orderDate: ISODate('2025-01-22'),
    status: 'delivered',
    paymentMethod: 'credit_card',
  },
]);
