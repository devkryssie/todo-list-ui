// //task1
// function mainFunction(callback) {
//   console.log("Doing something...");
//   callback(); 
// }

// function sayHello() {
//   console.log("Hello!");
// }

// mainFunction(sayHello);

// //task2
// let student = {
//   name: "Kryssie",
//   age: 20,
//   introduce: function() {
//     if (this.age >= 18) {
//       console.log("Adult student");
//     } else {
//       console.log("Young student");
//     }
//   }
// };

// student.introduce();

// let fruits = ["mango", "pea","banana", "orange", "grape"];  
// fruits.forEach((fruit, index) => {

//   if (index % 2 == 0) 
//     {
//     console.log(`${fruit} :yes`);
//   } 
//   else {
//     console.log(`${fruit} :no`);
//   }
// });





// fruits.forEach(function(fruit, index) {
//   if (fruit === "orange") {
    
//     console.log(`${fruit} is at index ${index}`);
//   }
// });

// fruits[index] = fruit + "fruit";
// });
// console.log(fruits);

//   console.log(index ,fruit);
// });
// let num = [10,10,10,10,10];
// let sum = 0
// num.forEach(function(number) {
//   if (typeof(number) === "number")
//   sum += number;
// });
// console.log(sum);







// let cart = []
// cart.push("apple");
// cart.push("banana");
// cart.push("orange");
// cart.push("grape");
// cart.pop();
// cart.splice(1, 1)
// console.log(cart);










// // let names = ["alice", "charlie", "mark", "christabel", "john"]; 
// // let longestName = "";
// // names.forEach(function(name) {
// //   if (name.length > longestName.length) {
// //     longestName = name;
// //   }
// // });
// // console.log(longestName);


// // let jo = 5>4 ? "okay":"not"
// // console.log(jo) 
// // const arr = [1,2,3,true]
// // const arr2 = Array.from('christabel')
// // console.log(arr2)



// // let number = [2,5,5,11,33]
// // let fil = number.filter(function(n){
// //    return n == 5
// //  })
// //  console.log(fil)


//  number.forEach((n, index) => {
//   n[index] *= 2
//  })kozens maret sufa 
//  console.log(number)




// let nums = [1, 2, 3, 4];
// let sum = nums.reduce(function(total, n) {
//   return total + n}, 0);

// console.log(sum);
// numbers=[1,2,3,4,5]
// let i = 0
// let sum =  numbers.reduce(function(a, v) {
//   return a + v
// }, 0)
// let numbers = [1, 3, 4, 2, 5, 6];
// //slice from 4 to 6
// let newNumbers = numbers.slice(3, 6)
// console.log(newNumbers)
//given an array sort in in both accending and decending other without using the sort method but  with the use of either forEach, map, filter do for both strings and numbers dont forget dont use the .sort method

// let numbers = [5, 2, 9, 1];

// numbers.forEach(function () {
    
//   numbers.forEach(function (_, j) {
//     if (numbers[j] > numbers[j + 1]) {
//       let temp = numbers[j];
//       numbers[j] = numbers[j + 1];
//       numbers[j + 1] = temp;
//     }
//   });
// });

// console.log(numbers);










// let words = ["banana", "apple", "cherry"];

// words.forEach(() => {
//   words.forEach((_, j) => {
//     if (words[j].localeCompare(words[j + 1]) > 0) {
//       let temp = words[j];
//       words[j] = words[j + 1];
//       words[j + 1] = temp;
//     }
//   });
// });

// console.log(words)


// let spli = [1,2]
// spli.splice(2, 0, 3,4,5)
// console.log(spli)

// let spil = [1,2,3,4]
// spil.splice(1,1)
// console.log(spil)


// let fin = [2,7,8,9,10]
// let f = fin.find(function(n){
//   return n > 5
// })
// console.log(f)


// let nums = [1, 2, 3, 4];

// nums.reverse();

// console.log(nums);



// let nums = [1, 2, 3, 4];

// let newNums = nums.toReversed();

// console.log(nums);     
// console.log(newNums);
// let arr = [1, 2, 3, 4];
// arr.shift();
// console.log(arr);
// let fruits = [["mango", "banana"], ["orange", "grape"], "mango", "kiwi"];
// let Mango = fruits.find((fruit, index) => {
//     console.log(fruit, index);
//     return fruit[index]== "mango";

// });
// console.log(Mango)
// let fruits = [
//   { name: "mango", price: 10, stock: 20 },
//   { name: "banana", price: 5, stock: 10 },
//   { name: "orange", price: 8, stock: 15 }
// ];

// let mango = fruits.find((fruit,index) => {
//     return fruit.name === "mango" && fruit.stock > 4;
// });
// console.log(mango)
// function checkFruit(name) {
//     return fruits.find(fruit => fruit.name === name);
// }
// function buyFruit(name, quantity) {
//     let fruit = checkFruit(name);
//      if(fruit === undefined || typeof(fruit) !== "object") {
//         console.log(`the fruit ${name} is not available`);
//         return;
//      }
//     if (fruit.stock < quantity) {
//         console.log(`Not enough stock for ${name} we only have ${fruit.stock} left`);
//         return;
//     } fruit.stock -= quantity;}
// buyFruit("mango", 10)

// function greet(a, b){
//     return a + b
// }
// let res = greet(2,2)
// console.log(res)
let products = [
  { name: "rice", price: 50, stock: 10 },
  { name: "beans", price: 40, stock: 5 },
  { name: "yam", price: 100, stock: 3 }
];

let cart = [];
function findProduct(name){
    return products.find(product => product.name === name)

}
function addToCart(name, quantity) {
    let product = findProduct(name);

    if (!product) {
        console.log(`the product ${name} is not available`);
        return;
    }

    if (product.stock < quantity) {
        console.log(`Not enough stock for ${name} we only have ${product.stock} left`);
        return;
    }

    product.stock -= quantity;

    cart.push({
        name: product.name,
        price: product.price,
        quantity: quantity,
        total: product.price * quantity
    });
}
addToCart("rice", 2);
addToCart("beans", 1);
console.log(cart)