const path = require('path');
const ScoreCounter = require('score-tests');
const {
  Shape,
  Circle,
  Rectangle,
  Square,
} = require('../src/shapes');

const testSuiteName = 'Shapes Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  describe('Shape', () => {
    it('creates a new shape instance', () => {
      const myShape = new Shape('blob');
      expect(myShape.type).toBe('blob');
      expect(myShape.getArea()).toBe(0);

      const myShape2 = new Shape('triangle');
      expect(myShape2.type).toBe('triangle');
      expect(myShape2.getArea()).toBe(0);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });
  });

  describe('Circle', () => {
    it('creates a new circle instance', () => {
      const myCircle = new Circle(10);
      expect(myCircle.type).toBe('Circle');
      expect(myCircle.radius).toBe(10);
      expect(myCircle.getArea()).toBeCloseTo(314.1592653589793, 5);

      const myCircle2 = new Circle(5);
      expect(myCircle2.type).toBe('Circle');
      expect(myCircle2.radius).toBe(5);
      expect(myCircle2.getArea()).toBeCloseTo(78.53981633974483, 5);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('inherits from Shape', () => {
      const circle = new Circle(10);
      const shape = new Shape('test');
      expect(circle instanceof Shape).toBe(true);
      expect(circle.getArea).not.toBe(shape.getArea); // Circle should override getArea

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('uses inheritance properly', () => {
      const circle = new Circle(10);

      // Circle constructor should only have 1 parameter
      expect(circle.constructor.length).toBe(1);

      // Circle constructor should use super
      expect(circle.constructor.toString().includes('super')).toBeTruthy();

      // Check that super is called with 'Circle'
      const superCallText = circle.constructor.toString().match(/super\(.*\)/g)[0];
      expect(superCallText).toContain('Circle');

      scoreCounter.correct(expect); // DO NOT TOUCH
    });
  });

  describe('Rectangle', () => {
    it('creates a new rectangle instance', () => {
      const myRectangle = new Rectangle(4, 3);
      expect(myRectangle.type).toBe('Rectangle');
      expect(myRectangle.length).toBe(4);
      expect(myRectangle.width).toBe(3);
      expect(myRectangle.getArea()).toBe(12);

      const myRectangle2 = new Rectangle(10, 5);
      expect(myRectangle2.type).toBe('Rectangle');
      expect(myRectangle2.length).toBe(10);
      expect(myRectangle2.width).toBe(5);
      expect(myRectangle2.getArea()).toBe(50);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('inherits from Shape', () => {
      const rect = new Rectangle(4, 3);
      const shape = new Shape('test');
      expect(rect instanceof Shape).toBe(true);
      expect(rect.getArea).not.toBe(shape.getArea); // Rectangle should override getArea

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('uses inheritance properly', () => {
      const rect = new Rectangle(4, 3);

      // Rectangle constructor should have 2 parameters
      expect(rect.constructor.length).toBe(2);

      // Rectangle constructor should use super
      expect(rect.constructor.toString().includes('super')).toBeTruthy();

      // Check that super is called with 'Rectangle'
      const superCallText = rect.constructor.toString().match(/super\(.*\)/g)[0];
      expect(superCallText).toContain('Rectangle');

      scoreCounter.correct(expect); // DO NOT TOUCH
    });
  });

  describe('Square', () => {
    it('creates a new square instance', () => {
      const mySquare = new Square(5);
      expect(mySquare.type).toBe('Square');
      expect(mySquare.length).toBe(5);
      expect(mySquare.width).toBe(5);
      expect(mySquare.getArea()).toBe(25);

      const mySquare2 = new Square(10);
      expect(mySquare2.type).toBe('Square');
      expect(mySquare2.length).toBe(10);
      expect(mySquare2.width).toBe(10);
      expect(mySquare2.getArea()).toBe(100);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('inherits from Rectangle', () => {
      const square = new Square(5);
      const rect = new Rectangle(10, 5);
      expect(square instanceof Rectangle).toBe(true);
      expect(square instanceof Shape).toBe(true);
      expect(square.getArea).toBe(rect.getArea); // Square should use Rectangle's getArea

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('uses inheritance properly', () => {
      const square = new Square(5);

      // Square constructor should only have 1 parameter
      expect(square.constructor.length).toBe(1);

      // Square constructor should use super
      expect(square.constructor.toString().includes('super')).toBeTruthy();

      // String manipulation to extract arguments passed to super()
      const superCallText = square.constructor.toString().match(/super\(.*\)/g)[0];
      const argsListText = superCallText.match(/\(.*\)/g)[0];
      const argValues = argsListText.replaceAll(' ', '').slice(1, -1).split(',');

      // Check that both arguments passed to super are the same.
      // For example, super(side, side) or super(length, length) and NOT super(length, width)
      expect(argValues[0]).toEqual(argValues[1]);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
