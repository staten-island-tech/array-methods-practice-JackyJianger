const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];

// 1. Log each student’s name and grade
students.forEach((student) => console.log(student.name, student.grade));
const gradeChecker = students.filter((student) => student.grade > 80);
console.log(gradeChecker);

const youngStudents = students.filter((student) => student.age <= 21);
console.log(youngStudents);

const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "Headphones", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];

const productPrice = products.forEach((product) =>
  console.log(product.name, product.price)
);
const productPriceIncrease = products.forEach((product) =>
  console.log(product.name, product.price * 1.1)
);
const categories = [];
products.forEach((product) => {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
});
console.log("Unique Categories:", categories);

const electronics = products.filter(
  (product) => product.category === "Electronics"
);
console.log("Electronics:", electronics);

const expensiveProducts = products.filter((product) => product.price > 300);
console.log("Expensive Products:", expensiveProducts);

const goodRatingProducts = products.filter((product) => product.rating >= 4.5);
console.log(goodRatingProducts);

const goodRatingProductsNames = products
  .filter((product) => product.rating >= 4.5)
  .forEach((goodproduct) => console.log(goodproduct.name));

const cheapElectronics = products
  .filter(
    (product) => product.category === "Electronics" && product.price < 1000
  )
  .forEach((product) => console.log(product.name));
