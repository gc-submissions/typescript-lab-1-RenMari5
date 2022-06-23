interface Mountain {
  name: string;
  height: number;
}

const mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

function findNameOfTallestMountain(array: Mountain[]) {
  //   const tallestMountain = Math.max(array.height);
  //   const i = array.indexOf(tallestMountain);
  //   return array[i].name;
  let maximum = array[0].height;
  for (let element of array) {
    if (maximum < element.height) {
      maximum = element.height;
    }
  }
  return maximum;
}

const tallGuy = findNameOfTallestMountain(mountains);
console.log(tallGuy);
