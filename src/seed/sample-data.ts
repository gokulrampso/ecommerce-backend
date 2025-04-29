export const sampleUsers = [
  {
    email: 'user1@example.com',
    password: '$2b$10$abcdefghijklmnopqrstuv', // hashed placeholder
    name: 'User One',
    roles: ['user'],
  },
  {
    email: 'admin@example.com',
    password: '$2b$10$abcdefghijklmnopqrstuv', // hashed placeholder
    name: 'Admin User',
    roles: ['admin'],
  },
  {
    email: 'user2@example.com',
    password: '$2b$10$abcdefghijklmnopqrstuv',
    name: 'User Two',
    roles: ['user'],
  },
  {
    email: 'user3@example.com',
    password: '$2b$10$abcdefghijklmnopqrstuv',
    name: 'User Three',
    roles: ['user'],
  },
  {
    email: 'user4@example.com',
    password: '$2b$10$abcdefghijklmnopqrstuv',
    name: 'User Four',
    roles: ['user'],
  },
];

export const sampleCategories = [
  { name: 'Electronics' },
  { name: 'Books' },
  { name: 'Clothing' },
  { name: 'Home' },
  { name: 'Toys' },
];

export const sampleProducts = [
  {
    name: 'Smartphone',
    description: 'Latest model smartphone',
    price: 699,
    category: 'Electronics',
    brand: 'BrandX',
    stock: 50,
  },
  {
    name: 'Novel',
    description: 'Bestselling novel',
    price: 19.99,
    category: 'Books',
    brand: 'BookBrand',
    stock: 100,
  },
  {
    name: 'T-shirt',
    description: '100% cotton t-shirt',
    price: 15.99,
    category: 'Clothing',
    brand: 'ClothBrand',
    stock: 200,
  },
  {
    name: 'Laptop',
    description: 'High performance laptop',
    price: 1299,
    category: 'Electronics',
    brand: 'BrandY',
    stock: 30,
  },
  {
    name: 'Board Game',
    description: 'Fun for the whole family',
    price: 29.99,
    category: 'Toys',
    brand: 'ToyBrand',
    stock: 80,
  },
  {
    name: 'Cookware Set',
    description: 'Non-stick cookware set',
    price: 89.99,
    category: 'Home',
    brand: 'HomeBrand',
    stock: 60,
  },
  {
    name: 'Headphones',
    description: 'Noise-cancelling headphones',
    price: 199.99,
    category: 'Electronics',
    brand: 'BrandZ',
    stock: 75,
  },
  {
    name: 'Children Book',
    description: 'Illustrated children book',
    price: 9.99,
    category: 'Books',
    brand: 'BookBrand',
    stock: 120,
  },
  {
    name: 'Jeans',
    description: 'Slim fit jeans',
    price: 39.99,
    category: 'Clothing',
    brand: 'ClothBrand',
    stock: 90,
  },
  {
    name: 'Action Figure',
    description: 'Collectible action figure',
    price: 24.99,
    category: 'Toys',
    brand: 'ToyBrand',
    stock: 150,
  },
];

export const sampleCarts = [
  // Example: { user: userId, items: [{ product: productId, quantity: 2 }] }
];

export const sampleOrders = [
  // Example: { user: userId, items: [{ product: productId, quantity: 1 }], shippingAddress: '...', paymentMethod: 'card', status: 'pending' }
]; 