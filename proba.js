/*const post = {
  name: 'Filipp',
  age: 30,
  city: 'St Petersburg'
}
console.table(post)

const newPost = (post, addedAt = Date()) => ({
  ...post,
  addedAt
})

const firstPost = {
  name: 'Anna',
  age: 32,
  city: 'Moscow'
}
console.table(newPost(firstPost))
console.table(newPost(post))

const error1 = () => {
  throw new Error('pizda')
}

try {
  error1()
} catch (error) {
  console.error(error)
  console.log(error.message)
}
console.log('...continue')

function my (a) {
  console.log(a);
}
let b = 10;
my(b = b + 1)

const myArray = [1, true, 'fil']
const myArray2 = new Array (1, true, 'fil', 31)
const myArray3 = myArray
myArray3.pop();
console.table(myArray);
const removed = myArray3.pop();
myArray2[3] = 30;
myArray2[5] = 22;
myArray2.push('Anna');
console.log(removed)
console.log(myArray2)
console.log(myArray2[2])
console.log(myArray2.length)
console.log(myArray === myArray2)
console.log(myArray === myArray3)*/

/*const myArray4 = [2, 4, 6];
console.log(myArray4);

const newArray = myArray4.map(el => (el + 2));

console.log(newArray);

console.log(myArray4);

const post = {
  name: 'Fil',
  age: 31,
  city: 'Moscow'
}
console.table(post);*/

/*const newPost = (post, addedAt = Date()) => {
  return{...post,
  addedAt,}
}

const firstPost = {
  name: 'Vadim',
  age: 35,
  city: 'Krasnodar'
}

console.table(newPost(firstPost))*/

/*const h = 19;

if (h>=18) {
  console.log ('Is adult')
}
if (h>=12 && h<18) {
  console.log ('Is teenager')
}
if (h<12) {
  console.log ('Is child')
}*/

/*const sumPos = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'a и(или) b не числа'
  }

  if (a <= 0 || b <= 0) {
    return 'a и(или) b не положительные числа'
  }

  return a+b
}

console.log(sumPos(-3, true))*/

