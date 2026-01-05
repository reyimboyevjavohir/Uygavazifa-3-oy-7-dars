//1-masala

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     return `Ism: ${this.name}, Yosh: ${this.age}`;
//   }
// }
// let p = new Person("Ali", 20);
// console.log(p.greet());

//2-masala

// class BankAccount {
//   constructor(balance = 0) {
//     this.balance = balance;
//   }
//   depozit(amount) {
//     this.balance += amount;
//   }
//   withdraw(amount) {
//     if (this.balance - amount < 0) {
//       console.log("Balans bo'sh bo‘lishi mumkin emas!");
//     } else {
//       this.balance -= amount;
//     }
//   }
// }
// let acc = new BankAccount(12000);
// acc.depozit(523);
// acc.withdraw(221);
// console.log(acc.balance);


//3-masala

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   area() {
//     return this.width * this.height;
//   }

//   perimeter() {
//     return 2 * (this.width + this.height);
//   }
// }
// let r = new Rectangle(5, 4);
// console.log(r.area());
// console.log(r.perimeter());

//4-masala

// class Student {
//   constructor(name, id, grades) {
//     this.name = name;
//     this.id = id;
//     this.grades = grades;
//   }

//   calculateAverage() {
//     let sum = 0;
//     for (let g of this.grades) {
//       sum += g;
//     }
//     return sum / this.grades.length;
//   }
// }

// let s = new Student("Vali", 1, [82, 92, 105]);
// console.log(s.calculateAverage());

//5-masala

// class Clock {
//   displayTime() {
//     let now = new Date();
//     console.log(now.toLocaleTimeString());
//   }
//   start() {
//     setInterval(() => {
//       this.displayTime();
//     }, 1000);
//   }
// }
// let clock = new Clock();
// clock.start();


//6-masala
// class Employee {
//   constructor(name, position, salary) {
//     this.name = name;
//     this.position = position;
//     this.salary = salary;
//   }
//   giveRaise(percentage) {
//     this.salary += this.salary * (percentage / 100);
//   }
// }
// let emp = new Employee("Hasan", "Developer", 3000);
// emp.giveRaise(10);
// console.log(emp.salary);


//7-massala

// class Order {
//   constructor() {
//     this.items = [];
//   }
//   addItem(item, quantity, price) {
//     this.items.push({ item, quantity, price });
//   }
//   removeItem(item) {
//     this.items = this.items.filter(i => i.item !== item);
//   }
//   calculateTotal() {
//     let total = 0;
//     for (let i of this.items) {
//       total += i.quantity * i.price;
//     }
//     return total;
//   }
// }
// let order = new Order();
// order.addItem("Book", 2, 56);
// order.addItem("Pen", 3, 11);
// console.log(order.calculateTotal());


//8-masala

// class Kalkulyator {
//   add(a, b) {
//     return a + b;
//   }
//   subtract(a, b) {
//     return a - b;
//   }
//   multiply(a, b) {
//     return a * b;
//   }
//   divide(a, b) {
//     if (b === 0) return "0 ga bo'linadigan har  qanday natija 0 bilan  tugaydi";
//     return a / b;
//   }
// }
// let calc = new Kalkulyator();
// console.log(calc.add(5, 3));
// console.log(calc.divide(11, 2));


//9-masala

// class Stack {
//   constructor() {
//     this.items = [];
//   }
//   push(value) {
//     this.items.push(value);
//   }
//   pop() {
//     return this.items.pop();
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }
// }
// let stack = new Stack();
// stack.push(12);
// stack.push(18);
// console.log(stack.pop());
// console.log(stack.isEmpty());


//10-masala

// class Vehicle {
//   constructor(tezlik) {
//     this.tezlik = tezlik;
//   }
// }
// class Car extends Vehicle {
//   constructor(tezlik, hajmi) {
//     super(tezlik);
//     this.hajmi = hajmi;
//   }
// }
// let car = new Car(120, "60 litr");
// console.log(car.tezlik);
// console.log(car.hajmi);
