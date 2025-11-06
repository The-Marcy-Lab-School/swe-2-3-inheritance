# Inheritance

- [Reminders](#reminders)
  - [Asking ChatGPT for Help](#asking-chatgpt-for-help)
  - [Be Okay With Being "Provisionally Complete"](#be-okay-with-being-provisionally-complete)
- [Setup](#setup)
- [Short Response Questions](#short-response-questions)
  - [Prompt 1](#prompt-1)
  - [Prompt 2](#prompt-2)
  - [Prompt 3](#prompt-3)
- [From Scratch](#from-scratch)
  - [Problem Set 1: Shapes](#problem-set-1-shapes)
    - [Shape](#shape)
    - [Circle](#circle)
    - [Rectangle](#rectangle)
    - [Square](#square)
  - [Problem Set 2: Library System](#problem-set-2-library-system)
    - [LibraryItem](#libraryitem)
    - [Book](#book)
    - [DVD](#dvd)
    - [Magazine](#magazine)


## Reminders

### Asking ChatGPT for Help

If you’re stuck, you may use ChatGPT to clarify the assignment — but not to solve it for you. To do this, copy the meta-prompt below into ChatGPT along with the assignment question.

> You are acting as a tutor. Your job is to explain what this coding question is asking, clarify confusing wording, and highlight the relevant concepts students need to know — but do not provide the full solution or code that directly answers the question. Instead, focus on rephrasing the problem in simpler terms, identifying what’s being tested, and suggesting what steps or thought processes might help. Ask guiding questions to ensure the student is thinking critically. Do not write the final function, algorithm, or code implementation.

Be mindful of your AI usage on assignments. AI can be a great tool to help your learning but it can also be detrimental if you let it do too much of the thinking for you.

### Be Okay With Being "Provisionally Complete"

At Marcy, we will deem an assignment as "complete" if the solution passes at least **75%** of the automated tests. 

However, we know many of you will feel the urge to hold off on submitting until your assignment feels 100% perfect. That drive for excellence is an asset!

But perfectionism can also get in the way of learning — especially when we need to cover a lot in a short amount of time.

That’s why we encourage you to be comfortable with being **“provisionally complete.”** This means:

- Submitting your work even if it isn’t perfect yet
- Treating submission as a checkpoint, not a finish line
- Committing to return, revise, and improve later

Learning to move forward with provisional completeness will help you make steady progress while still building the habit of continuous improvement.

## Setup

For guidance on setting up and submitting this assignment, refer to the Marcy lab School Docs How-To guide for [Working with Short Response and Coding Assignments](https://marcylabschool.gitbook.io/marcy-lab-school-docs/how-tos/working-with-assignments#how-to-work-on-assignments).

Here are some useful commands to remember.

```sh
npm i                   # install dependencies
git checkout -b draft   # switch to the draft branch before starting

npm test # run the automated tests
npm run test:w # run the automated tests and rerun them each time you save a change

git add -A              # add a changed file to the staging area
git commit -m 'message' # create a commit with the changes
git push                # push the new commit to the remote repo
```

## Short Response Questions

Short response questions can be found in the `src/short-response.md` file. Write your responses directly in that file! Do not forget to complete this part of the assignment.

### Prompt 1

In your own words, define what **inheritance** is in object-oriented programming. Then, explain what benefits it provides to developers who use it. Consider what problem it solves — what would be harder or messier without inheritance?

### Prompt 2

Consider these classes:

```js
class Animal {
  eat() { return "eating"; }
}

class Dog extends Animal {
  bark() { return "woof"; }
}

class Puppy extends Dog {
  play() { return "playing"; }
}

const rex = new Puppy();
```

Explain what happens when `rex.eat()` is invoked. In your answer, describe the role of **inheritance** and the **prototype chain**.

### Prompt 3 

Look at these classes:

```js
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  getDetails() {
    return `${this.name} earns $${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    // YOUR CODE HERE
  }
  getDetails() {
    // YOUR CODE HERE - should include both the Employee details 
    // AND the department info
  }
}
```

Complete the `Manager` class by filling in the `constructor` and `getDetails` methods. Explain why you need to use `super` in each method and what would happen if you didn't use it.

## From Scratch

In these problem sets, you'll build a hierarchy of classes with inheritance. This will help you practice:
- Using `extends` to create subclasses
- Using `super()` to call parent constructors
- Overriding methods to provide specific implementations

### Problem Set 1: Shapes

#### Shape

Create a `Shape` class.

In the constructor:
- Accept a `type` parameter
- Store the `type` property

Define a `getArea` method that returns `0`.

Example Usage:

```js
const myShape = new Shape('blob');
console.log(myShape.type); // blob
console.log(myShape.getArea()); // 0
```

#### Circle

Now, create a `Circle` class that **extends `Shape`**. 

In the constructor:
- Accept a `radius` parameter
- Call the parent constructor with the type `'Circle'`
- Store the `radius` property

Override the `getArea()` method to calculate and return the area of the circle. The area of a circle can be calculated with the formula: `Math.PI * (radius ** 2)` or `Math.PI * radius * radius`.

Example Usage:

```js
const myCircle = new Circle(10);
console.log(myCircle.type); // Circle
console.log(myCircle.radius); // 10
console.log(myCircle.getArea()); // 314.15927....
```


#### Rectangle

Create a `Rectangle` class that **extends `Shape`**. 

In the constructor:
- Accept `length` and `width` parameters
- Call the parent constructor with the type `'Rectangle'`
- Store the `length` and `width` properties

Override the `getArea()` method to calculate and return the area of the rectangle. The area of a rectangle is calculated by multiplying `length * width`.

Example Usage:

```js
const myRectangle = new Rectangle(4, 3);
console.log(myRectangle.type); // Rectangle
console.log(myRectangle.length); // 4
console.log(myRectangle.width); // 3
console.log(myRectangle.getArea()); // 12
```

#### Square

Finally, create a `Square` class that **extends `Rectangle`**. A square is a special rectangle where length and width are equal.

In the constructor:
- Accept a single `side` parameter
- Call the parent constructor with `side` for both length and width
- The type should be `'Square'` (you'll need to override it)

Consider: do you need to override the `getArea` method?

```js
const mySquare = new Square(5);
console.log(mySquare.type); // Square
console.log(mySquare.length); // 5
console.log(mySquare.width); // 5
console.log(mySquare.getArea()); // 25
```

### Problem Set 2: Library System

In this problem set, you'll practice using inheritance to build a hierarchy of library item classes.

#### LibraryItem

Create a `LibraryItem` class with:
- A constructor that accepts `title` and `year` parameters and stores them as properties
- A public field `isCheckedOut` with a default value of `false`
- A `checkOut()` method that sets `isCheckedOut` to `true` and *returns* the string `"<title> has been checked out"`
- A `returnItem()` method that sets `isCheckedOut` to `false` and *returns* the string `"<title> has been returned"`
- A `getDescription()` method that returns the string `"<title> (<year>)"`

Example Usage:

```js
const item = new LibraryItem('The Great Gatsby', 1925);
console.log(item.title); // The Great Gatsby
console.log(item.year); // 1925
console.log(item.isCheckedOut); // false
console.log(item.checkOut()); // The Great Gatsby has been checked out
console.log(item.isCheckedOut); // true
console.log(item.returnItem()); // The Great Gatsby has been returned
console.log(item.isCheckedOut); // false
console.log(item.getDescription()); // The Great Gatsby (1925)
```

#### Book

Create a `Book` class that **extends `LibraryItem`**.

Example Usage:

In the constructor:
- Accept `title`, `year`, `author`, and `pages` parameters
- Call the parent constructor with `title` and `year`
- Store the `author` and `pages` properties

Override the `getDescription()` method to return a string in this format: `"<title> (<year>) by <author>, <pages> pages"`. Consider how you can use `super` to avoid duplicated code.

You **don't need to override `checkOut()` or `returnItem()`** - they're inherited from `LibraryItem` and work correctly!

Example Usage:

```js
const book = new Book('The Color Purple', 1982, 'Alice Walker', 295);
console.log(book.title); // The Color Purple
console.log(book.year); // 1982
console.log(book.author); // Alice Walker
console.log(book.pages); // 295
console.log(book.getDescription()); // The Color Purple (1982) by Alice Walker, 295 pages
console.log(book.checkOut()); // The Color Purple has been checked out
console.log(book.isCheckedOut); // true
```

#### DVD

Create a `DVD` class that **extends `LibraryItem`**.

Look at the example usage below and implement the `DVD` class so that it produces the expected output:

```js
const dvd = new DVD('Inception', 2010, 'Christopher Nolan', 148);
console.log(dvd.title); // Inception
console.log(dvd.director); // Christopher Nolan
console.log(dvd.runtime); // 148
console.log(dvd.getDescription()); // Inception (2010) directed by Christopher Nolan, 148 min
console.log(dvd.checkOut()); // Inception has been checked out
console.log(dvd.isCheckedOut); // true
```

#### Magazine

Create a `Magazine` class that **extends `LibraryItem`**.

Look at the example usage below and implement the `Magazine` class so that it produces the expected output:
```js
const magazine = new Magazine('National Geographic', 2024, 5);
console.log(magazine.title); // National Geographic
console.log(magazine.issue); // 5
console.log(magazine.getDescription()); // National Geographic (2024) Issue #5
console.log(magazine.checkOut()); // National Geographic has been checked out
console.log(magazine.returnItem()); // National Geographic has been returned
```