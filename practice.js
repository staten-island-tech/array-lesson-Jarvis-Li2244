
//Assignment 1

const students = [
    { name: 'Alice', age: 20, grade: 85 },
    { name: 'Bob', age: 22, grade: 90 },
    { name: 'Charlie', age: 21, grade: 78 },
    { name: 'Diana', age: 23, grade: 95 },
  ];

//Part 1
students.forEach(student => console.log(student.name, student.grade));

//Part 2 #1
const topStudents = students
    .filter(student => student.grade > 80);
console.log(topStudents);

//Part 2 #2
const youngStudents = students
    .filter(student => student.age <= 21);
console.log(youngStudents);

//Part 3 #1
topStudents
    .forEach(student => console.log(student.name));

//Part 3 #2
youngStudents
    .forEach(student => console.log(student.name));



//Assignment 2

const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics', rating: 4.5 },
    { name: 'Phone', price: 800, category: 'Electronics', rating: 4.7 },
    { name: 'Headphones', price: 150, category: 'Accessories', rating: 4.3 },
    { name: 'Monitor', price: 300, category: 'Electronics', rating: 4.6 },
    { name: 'Keyboard', price: 100, category: 'Accessories', rating: 4.1 },
    { name: 'Chair', price: 250, category: 'Furniture', rating: 4.0 },
    { name: 'Desk', price: 450, category: 'Furniture', rating: 4.8 }
  ];

//Part 1 #1
products
    .forEach(product => console.log(product.name, product.price))

//Part 1 #2
products
    .forEach(product => console.log(product.price * 1.1))

//Part 1 #3
const categories = []; //empty array
products
    .forEach(product => {
        if (!categories.includes(product.category)) {
        categories.push(product.category);
        }
    }
); 
console.log('Unique Categories:', categories);
//for each product, check if the category is in the array, if not, add it.

//Part 2 #1
const electronics = products
    .filter(product => product.category === 'Electronics');
console.log('Electronics:', electronics);

//Part 2 #2
const expensiveProducts = products
    .filter(product => product.price > 300);
console.log('Expensive Products:', expensiveProducts);

//Part 2 #3
const highlyratedProducts = products
    .filter(product => product.rating >= 4.5);
console.log('Highly Rated Products:', highlyratedProducts);

//Part 3 #1
highlyratedProducts
    .forEach(product => console.log(product.name))

//Part 3 #2
electronics
    .filter(product => product.price < 1000)
    .forEach(product => console.log(product))