export interface Mountain {
  name: string;
  height: number;
}

const mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

export function findNameOfTallestMountain(array: Mountain[]) {
  //   const tallestMountain = Math.max(array.height);
  //   const i = array.indexOf(tallestMountain);
  //   return array[i].name;
  let maximum: number = array[0].height;
  let tallestGuy: string = "";
  for (let element of array) {
    if (maximum < element.height) {
      maximum = element.height;
      tallestGuy = element.name;
    }
  }
  return tallestGuy;
}

const tallGuy = findNameOfTallestMountain(mountains);
console.log(tallGuy);
