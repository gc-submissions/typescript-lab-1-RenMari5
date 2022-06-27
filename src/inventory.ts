import { Product } from "./products";

interface InventoryItem {
  product: Product;
  quantity: number;
}

const inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 },
];

console.log(inventory);

function calcInventoryValue(array: InventoryItem[]) {
  let totalValue = 0;
  for (let item of array) {
    if (array !== []) {
      totalValue = item.quantity * item.product.price;
      totalValue++;
      return totalValue;
    } else {
      return 0;
    }
  }
}

let productTotalValue = calcInventoryValue(inventory);
console.log(productTotalValue);
