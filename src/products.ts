export interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  { name: "Shampoo", price: 5.5 },
  { name: "Loofah", price: 2.99 },
  { name: "Nose hair clippers", price: 4.0 },
];

export function calcAverageProductPrice(array: Product[]) {
  if (array !== []) {
    const average = array.reduce((a, b) => a + b.price, 0) / array.length;
    return average;
  } else {
    return 0;
  }
}

const averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);
