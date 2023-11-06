// Added prompt and ask customer what would they like to order
const floverString = prompt(
    "What flover would you like?",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// split the string of flover into a array of string
const floverArray = floverString.split(",");

const froyos = [];
for (let i = 0; i < floverArray.length; i++) {
  const str = floverArray[i];
  const flover = (str);
  froyos.push(flover);
}

// iterate through the array of flavors
const froyosFlavors = {};
for (let i = 0; i < froyos.length; i++) {
  if (froyosFlavors[froyos[i]]) {
    froyosFlavors[froyos[i]]++;
  } else {
    froyosFlavors[froyos[i]] = 1;
  }
}
   

console.log(froyos);
console.table(froyosFlavors)



  



