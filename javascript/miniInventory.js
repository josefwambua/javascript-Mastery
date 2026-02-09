// ============================================
// INVENTORY AND PURCHASING SYSTEM
// ============================================

// Product inventory storage
let products = [
  { id: 1, name: "Laptop", price: 999.99, stock: 5 },
  { id: 2, name: "Mouse", price: 29.99, stock: 15 },
  { id: 3, name: "Keyboard", price: 79.99, stock: 10 },
  { id: 4, name: "Monitor", price: 299.99, stock: 3 },
  { id: 5, name: "Webcam", price: 89.99, stock: 0 }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Find a product by its ID
 * @param {number} id - Product ID to search for
 * @returns {object|null} - Product object or null if not found
 */
function findProductById(id) {
  return products.find(product => product.id === id) || null;
}

/**
 * Check if all products are out of stock
 * @returns {boolean} - True if all products have 0 stock
 */
function allProductsOutOfStock() {
  return products.every(product => product.stock === 0);
}

/**
 * Generate the next available product ID
 * @returns {number} - Next ID to use
 */
function getNextId() {
  if (products.length === 0) return 1;
  return Math.max(...products.map(p => p.id)) + 1;
}

// ============================================
// ADMIN FUNCTIONS
// ============================================

/**
 * Add a new product to the inventory
 * @param {string} name - Product name
 * @param {number} price - Product price
 * @param {number} stock - Initial stock quantity
 */
function adminAddProduct(name, price, stock) {
  // Validate inputs
  if (!name || typeof name !== 'string') {
    console.log("❌ Error: Product name must be a valid string.");
    return;
  }
  if (typeof price !== 'number' || price <= 0) {
    console.log("❌ Error: Price must be a positive number.");
    return;
  }
  if (typeof stock !== 'number' || stock < 0) {
    console.log("❌ Error: Stock must be a non-negative number.");
    return;
  }

  // Create new product
  const newProduct = {
    id: getNextId(),
    name: name,
    price: price,
    stock: stock
  };

  products.push(newProduct);
  console.log(`✅ Admin: Added new product "${name}" (ID: ${newProduct.id}) - Price: $${price.toFixed(2)}, Stock: ${stock}`);
}

/**
 * Restock an existing product by adding to its current stock
 * @param {number} id - Product ID to restock
 * @param {number} quantity - Amount to add to stock
 */
function adminRestockProduct(id, quantity) {
  // Validate quantity
  if (typeof quantity !== 'number' || quantity <= 0) {
    console.log("❌ Error: Restock quantity must be a positive number.");
    return;
  }

  // Find the product
  const product = findProductById(id);
  
  if (!product) {
    console.log(`❌ Error: Product with ID ${id} not found.`);
    return;
  }

  // Update stock
  const oldStock = product.stock;
  product.stock += quantity;
  
  console.log(`✅ Admin: Restocked "${product.name}" (ID: ${id}) - Added ${quantity} units (${oldStock} → ${product.stock})`);
}

// ============================================
// CUSTOMER FUNCTIONS
// ============================================

/**
 * Display all products with their details
 */
function customerViewProducts() {
  console.log("\n📦 === AVAILABLE PRODUCTS ===");
  
  if (products.length === 0) {
    console.log("No products available.");
    return;
  }

  products.forEach(product => {
    const stockStatus = product.stock === 0 ? "OUT OF STOCK" : `${product.stock} available`;
    console.log(`ID: ${product.id} | ${product.name} | $${product.price.toFixed(2)} | Stock: ${stockStatus}`);
  });
  
  console.log("=============================\n");
}

/**
 * Purchase a product by its ID
 * @param {number} id - Product ID to purchase
 * @param {number} quantity - Quantity to purchase (default: 1)
 */
function customerBuyProduct(id, quantity = 1) {
  // Validate quantity
  if (typeof quantity !== 'number' || quantity <= 0) {
    console.log("❌ Error: Purchase quantity must be a positive number.");
    return;
  }

  // Find the product
  const product = findProductById(id);
  
  if (!product) {
    console.log(`❌ Error: Product with ID ${id} not found.`);
    return;
  }

  // Check if product is in stock
  if (product.stock === 0) {
    console.log(`❌ Purchase failed: "${product.name}" is currently OUT OF STOCK. Please check back later.`);
    return;
  }

  // Check if enough stock is available
  if (product.stock < quantity) {
    console.log(`❌ Purchase failed: Only ${product.stock} unit(s) of "${product.name}" available, but you requested ${quantity}.`);
    return;
  }

  // Process the purchase
  product.stock -= quantity;
  const totalCost = product.price * quantity;
  
  console.log(`✅ Purchase successful: ${quantity}x "${product.name}" for $${totalCost.toFixed(2)} - Remaining stock: ${product.stock}`);

  // Check if all products are now out of stock
  if (allProductsOutOfStock()) {
    console.log("\n🚨 ALERT TO ADMIN: ALL PRODUCTS ARE OUT OF STOCK! Please restock immediately.\n");
  }
}

// ============================================
// DEMONSTRATION / USAGE EXAMPLES
// ============================================

console.log("===========================================");
console.log("  INVENTORY SYSTEM DEMONSTRATION");
console.log("===========================================\n");

// Customer views initial products
customerViewProducts();

// Customer makes some purchases
console.log("--- Customer Actions ---");
customerBuyProduct(1, 2);  // Buy 2 laptops
customerBuyProduct(2);     // Buy 1 mouse
customerBuyProduct(5);     // Try to buy webcam (out of stock)
customerBuyProduct(4, 10); // Try to buy more monitors than available

console.log("\n--- Admin Actions ---");
// Admin restocks products
adminRestockProduct(5, 20);  // Restock webcams
adminRestockProduct(1, 10);  // Restock laptops

// Admin adds new product
adminAddProduct("USB Cable", 9.99, 50);
adminAddProduct("Headphones", 149.99, 8);

// View updated inventory
customerViewProducts();

// More customer purchases
console.log("--- More Customer Actions ---");
customerBuyProduct(5, 3);   // Buy webcams (now in stock)
customerBuyProduct(6, 1);   // Buy USB cable

// View final inventory
customerViewProducts();

// Test edge cases
console.log("--- Testing Edge Cases ---");
adminAddProduct("", 50, 10);           // Invalid name
adminAddProduct("Speaker", -10, 5);    // Invalid price
adminRestockProduct(999, 10);          // Non-existent product
customerBuyProduct(1, -5);             // Invalid quantity

// Scenario: Sell out all products to trigger admin alert
console.log("\n--- Testing Stock Alert ---");
customerBuyProduct(1, 13);  // Buy all laptops
customerBuyProduct(2, 14);  // Buy all mice
customerBuyProduct(3, 10);  // Buy all keyboards
customerBuyProduct(4, 3);   // Buy all monitors
customerBuyProduct(5, 17);  // Buy all webcams
customerBuyProduct(6, 49);  // Buy all USB cables
customerBuyProduct(7, 8);   // Buy all headphones (triggers alert)

console.log("\n===========================================");
console.log("  END OF DEMONSTRATION");
console.log("===========================================");