///////////////////////////////////
// 1. Sum of Squares

function sumOfSquares() {
  const numbers = [1, 2, 3, 4, 5];
  const result = numbers
    .map(num => num * num)
    .reduce((acc, curr) => acc + curr, 0);
  console.log(result);
}

/////////////////////////////////////////
//1) Find unqiue Names

function unqiueNames() {
  const names = ['Ebi', 'Nidhi', 'Manoj', 'Ebi', 'Rajini'];
  const unqiue = names.filter((word, index) => names.indexOf(word) == index);
  console.log(unqiue);
}
/////////////////////////////////
///3) count how many words
function countWord() {
  const text = 'hello world hello javascript hello';
  const freq = text.split(' ').reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  console.log(freq);
}

/////////////////////////////////////
///4) Product over 100
function over100() {
  const products = [
    { name: 'Shirt', price: 150 },
    { name: 'Pen', price: 20 },
    { name: 'Bag', price: 200 },
  ];
  const result = products
    .filter(pro => pro.price > 100)
    .map(prdct => prdct.name);
  console.log(result);
}

///////////////////////////
//5) Captilaize first letter

function capitilize() {
  const names = ['ebi', 'manoj', 'nidhi'];
  const capitilized = names.map(n => n[0].toUpperCase() + n.slice(1));
  console.log(capitilized);
}

///////////////////////////////////
///Total age

function calculateTotalAge() {
  const people = [
    { name: 'Ebi', age: 23 },
    { name: 'Nidhi', age: 20 },
    { name: 'Manoj', age: 50 },
  ];
  const total = people.reduce((acc, curr) => acc + curr.age, 0);
  console.log(total);
}

////////////////////////////////////////
///Highest age person

function highestAge() {
  const people = [
    { name: 'Ebi', age: 23 },
    { name: 'Nidhi', age: 20 },
    { name: 'Manoj', age: 50 },
  ];
  const [, highest] = Object.values(
    people.reduce((acc, curr) => (acc.age > curr.age ? acc : curr))
  );

  console.log(highest);
}

/////////////////////////////////////////////////////
///Group them by category

function group() {
  const items = [
    { name: 'Apple', category: 'Fruit' },
    { name: 'Carrot', category: 'Vegetable' },
    { name: 'Banana', category: 'Fruit' },
  ];
  const grouped = items.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = [];
    }
    acc[curr.category].push(curr.name);
    return acc;
  }, {});
  console.log(grouped);
}

///////////////////////////////////////////////////////
////Running Total
function runningtotal() {
  const nums = [1, 2, 3, 4, 5];

  const total = nums.reduce((acc, curr, index) => {
    const sum = nums.slice(0, index + 1).reduce((acc, curr) => acc + curr, 0);
    acc.push(sum);
    return acc;
  }, []);
  console.log(total);
}
runningtotal();
