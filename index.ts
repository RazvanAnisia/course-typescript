const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//When to use annotations
//1.Function that returns the ANY tpe.
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//1.When we declare a variable on one line then initialize it later
let words = ['red', 'greeen', 'blue'];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'greeen') {
    foundWord = true;
  }
}

//3. Variable whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number | {} = false;
//If the number is above 0, numberAboveZero will be assigned to it's value

for (let i = 0; i < numbers.length; i++) {
  if (i > 0) {
    numberAboveZero = { i };
  }
}
