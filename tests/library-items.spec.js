const path = require('path');
const ScoreCounter = require('score-tests');
const {
  LibraryItem,
  Book,
  DVD,
  Magazine,
} = require('../src/library-items');

const testSuiteName = 'Library Items Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  describe('LibraryItem', () => {
    it('creates a new library item instance', () => {
      const item = new LibraryItem('The Great Gatsby', 1925);
      expect(item.title).toBe('The Great Gatsby');
      expect(item.year).toBe(1925);
      expect(item.isCheckedOut).toBe(false);

      const item2 = new LibraryItem('1984', 1949);
      expect(item2.title).toBe('1984');
      expect(item2.year).toBe(1949);
      expect(item2.isCheckedOut).toBe(false);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('checkOut method sets isCheckedOut to true and returns correct string', () => {
      const item = new LibraryItem('The Great Gatsby', 1925);
      expect(item.isCheckedOut).toBe(false);
      const result = item.checkOut();
      expect(item.isCheckedOut).toBe(true);
      expect(result).toBe('The Great Gatsby has been checked out');

      const item2 = new LibraryItem('1984', 1949);
      const result2 = item2.checkOut();
      expect(item2.isCheckedOut).toBe(true);
      expect(result2).toBe('1984 has been checked out');

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('returnItem method sets isCheckedOut to false and returns correct string', () => {
      const item = new LibraryItem('The Great Gatsby', 1925);
      item.checkOut();
      expect(item.isCheckedOut).toBe(true);
      const result = item.returnItem();
      expect(item.isCheckedOut).toBe(false);
      expect(result).toBe('The Great Gatsby has been returned');

      const item2 = new LibraryItem('1984', 1949);
      item2.checkOut();
      const result2 = item2.returnItem();
      expect(item2.isCheckedOut).toBe(false);
      expect(result2).toBe('1984 has been returned');

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('getDescription method returns correct string', () => {
      const item = new LibraryItem('The Great Gatsby', 1925);
      expect(item.getDescription()).toBe('The Great Gatsby (1925)');

      const item2 = new LibraryItem('1984', 1949);
      expect(item2.getDescription()).toBe('1984 (1949)');

      scoreCounter.correct(expect); // DO NOT TOUCH
    });
  });

  describe('Book', () => {
    it('creates a new book instance', () => {
      const book = new Book('The Color Purple', 1982, 'Alice Walker', 295);
      expect(book.title).toBe('The Color Purple');
      expect(book.year).toBe(1982);
      expect(book.author).toBe('Alice Walker');
      expect(book.pages).toBe(295);
      expect(book.isCheckedOut).toBe(false);

      const book2 = new Book('To Kill a Mockingbird', 1960, 'Harper Lee', 281);
      expect(book2.title).toBe('To Kill a Mockingbird');
      expect(book2.year).toBe(1960);
      expect(book2.author).toBe('Harper Lee');
      expect(book2.pages).toBe(281);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('inherits checkOut and returnItem from LibraryItem', () => {
      const book = new Book('The Color Purple', 1982, 'Alice Walker', 295);

      expect(book.checkOut()).toBe('The Color Purple has been checked out');
      expect(book.isCheckedOut).toBe(true);
      expect(book.returnItem()).toBe('The Color Purple has been returned');
      expect(book.isCheckedOut).toBe(false);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('overrides getDescription method correctly', () => {
      const book = new Book('The Color Purple', 1982, 'Alice Walker', 295);
      expect(book.getDescription()).toBe('The Color Purple (1982) by Alice Walker, 295 pages');

      const book2 = new Book('To Kill a Mockingbird', 1960, 'Harper Lee', 281);
      expect(book2.getDescription()).toBe('To Kill a Mockingbird (1960) by Harper Lee, 281 pages');

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('inherits from LibraryItem', () => {
      const book = new Book('The Color Purple', 1982, 'Alice Walker', 295);
      const item = new LibraryItem('Test', 2000);
      expect(book instanceof LibraryItem).toBe(true);
      expect(book.checkOut).toBe(item.checkOut);
      expect(book.returnItem).toBe(item.returnItem);

      // Book should override getDescription
      expect(book.getDescription).not.toBe(item.getDescription);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('uses inheritance properly', () => {
      const book = new Book('The Color Purple', 1982, 'Alice Walker', 295);

      // Book constructor should have 4 parameters
      expect(book.constructor.length).toBe(4);

      // Book constructor should use super
      expect(book.constructor.toString().includes('super')).toBeTruthy();

      scoreCounter.correct(expect); // DO NOT TOUCH
    });
  });

  describe('DVD', () => {
    it('creates a new DVD instance', () => {
      const dvd = new DVD('Inception', 2010, 'Christopher Nolan', 148);
      expect(dvd.title).toBe('Inception');
      expect(dvd.year).toBe(2010);
      expect(dvd.director).toBe('Christopher Nolan');
      expect(dvd.runtime).toBe(148);
      expect(dvd.isCheckedOut).toBe(false);

      const dvd2 = new DVD('The Matrix', 1999, 'The Wachowskis', 136);
      expect(dvd2.title).toBe('The Matrix');
      expect(dvd2.year).toBe(1999);
      expect(dvd2.director).toBe('The Wachowskis');
      expect(dvd2.runtime).toBe(136);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('inherits checkOut and returnItem from LibraryItem', () => {
      const dvd = new DVD('Inception', 2010, 'Christopher Nolan', 148);
      expect(dvd.checkOut()).toBe('Inception has been checked out');
      expect(dvd.isCheckedOut).toBe(true);
      expect(dvd.returnItem()).toBe('Inception has been returned');
      expect(dvd.isCheckedOut).toBe(false);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('overrides getDescription method correctly', () => {
      const dvd = new DVD('Inception', 2010, 'Christopher Nolan', 148);
      expect(dvd.getDescription()).toBe('Inception (2010) directed by Christopher Nolan, 148 min');

      const dvd2 = new DVD('The Matrix', 1999, 'The Wachowskis', 136);
      expect(dvd2.getDescription()).toBe('The Matrix (1999) directed by The Wachowskis, 136 min');

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('inherits from LibraryItem', () => {
      const dvd = new DVD('Inception', 2010, 'Christopher Nolan', 148);
      const item = new LibraryItem('Test', 2000);
      expect(dvd instanceof LibraryItem).toBe(true);
      expect(dvd.checkOut).toBe(item.checkOut);
      expect(dvd.returnItem).toBe(item.returnItem);

      // DVD should override getDescription
      expect(dvd.getDescription).not.toBe(item.getDescription);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('uses inheritance properly', () => {
      const dvd = new DVD('Inception', 2010, 'Christopher Nolan', 148);

      // DVD constructor should have 4 parameters
      expect(dvd.constructor.length).toBe(4);

      // DVD constructor should use super
      expect(dvd.constructor.toString().includes('super')).toBeTruthy();

      scoreCounter.correct(expect); // DO NOT TOUCH
    });
  });

  describe('Magazine', () => {
    it('creates a new magazine instance', () => {
      const magazine = new Magazine('National Geographic', 2024, 5);
      expect(magazine.title).toBe('National Geographic');
      expect(magazine.year).toBe(2024);
      expect(magazine.issue).toBe(5);
      expect(magazine.isCheckedOut).toBe(false);

      const magazine2 = new Magazine('Time', 2023, 12);
      expect(magazine2.title).toBe('Time');
      expect(magazine2.year).toBe(2023);
      expect(magazine2.issue).toBe(12);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('inherits checkOut and returnItem from LibraryItem', () => {
      const magazine = new Magazine('National Geographic', 2024, 5);
      expect(magazine.checkOut()).toBe('National Geographic has been checked out');
      expect(magazine.isCheckedOut).toBe(true);
      expect(magazine.returnItem()).toBe('National Geographic has been returned');
      expect(magazine.isCheckedOut).toBe(false);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('overrides getDescription method correctly', () => {
      const magazine = new Magazine('National Geographic', 2024, 5);
      expect(magazine.getDescription()).toBe('National Geographic (2024) Issue #5');

      const magazine2 = new Magazine('Time', 2023, 12);
      expect(magazine2.getDescription()).toBe('Time (2023) Issue #12');

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('inherits from LibraryItem', () => {
      const magazine = new Magazine('National Geographic', 2024, 5);
      const item = new LibraryItem('Test', 2000);
      expect(magazine instanceof LibraryItem).toBe(true);
      expect(magazine.checkOut).toBe(item.checkOut);
      expect(magazine.returnItem).toBe(item.returnItem);

      // Magazine should override getDescription
      expect(magazine.getDescription).not.toBe(item.getDescription);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('uses inheritance properly', () => {
      const magazine = new Magazine('National Geographic', 2024, 5);

      // Magazine constructor should have 3 parameters
      expect(magazine.constructor.length).toBe(3);

      // Magazine constructor should use super
      expect(magazine.constructor.toString().includes('super')).toBeTruthy();

      scoreCounter.correct(expect); // DO NOT TOUCH
    });
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
