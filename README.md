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
  - [Question 1 - Quadrilateral](#question-1---quadrilateral)
  - [Question 2 - Rectangle](#question-2---rectangle)
  - [Question 3 - Square](#question-3---square)
- [Design Challenge](#design-challenge)


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

### Question 1 - Quadrilateral

Create a `Quadrilateral` class. Check the tests to see what arguments it's expecting and whether or not it has any methods on it.

### Question 2 - Rectangle

Now make a `Rectangle` class that inherits from the `Quadrilateral` class. Pay very careful attention to how the arguments for `Rectangle` differ from `Quadrilateral`. How should this class deal with its parent? Does it need any methods of its own or is it borrowing from the parent?

### Question 3 - Square

Finally, make a `Square` class that inherits from...someone. Check the tests to see who the direct parent is, and what arguments `Square` takes on each instance.

Now, there are some methods that square *should* add:

- getPerimeter
- getArea
- getDiagonal

Hopefully you know how to get those things from the sides, but google or GPT is your friend here. Whenever you have a question, always think about where you're staring from (what do you know about the square) and where you're going (what are you trying to calculate).

## Design Challenge

Design a `Person` class.

**Instance Properties / Methods**: An instance of `Person` should have three *or more* data properties which can be any type (string, number, boolean, array, object, etc.). Your `Person` class should have at least three **non-trivial** instance methods. For this assignment, a trivial method is one that either gets the data property or sets the data property to the parameter value. In other words, methods like `setName()` or `changeName()` or `get name()` will not be accepted.

**Class Properties / Methods**: As for the *class* of Person, it should have a private variable to track each new instance, a `list` method that returns that variable, and a `find` method that allows you to look up a person by some attribute (you're choice).

This design challenge is purposefully ambiguous and open-ended to encourage creativity. There are no tests, so you will be responsible for QAing the code yourself with the `playground.js` file. Basically just log stuff out.

...Though if you wanted to add some *literal* tests yourself in a new `person.spec.js`, who's gonna stop you?
(don't add the scoring engine, just regular jest tests are fine).
