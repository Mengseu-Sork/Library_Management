import { Register } from "./classes/Register";
import { Login } from "./classes/Login";
import { Book } from "./classes/Book";
import { Borrow } from "./classes/Borrow";
import { BookFormat } from "./Enums/BookFomat";
import { Member } from "./classes/Member";
import { BorrowStatus } from "./Enums/BorrowStatus";
import { User } from "./classes/user";

const existingUsers: Register[] = [
  new Register("John", "Doe", "john@gmail.com", "0123", 25, "pass", "kampot"),
  new Register("Jane", "Smith", "jane@gmail.com", "0456", 28, "word", "kampot"),
  new Register("Alice", "Smith","alice@example.com","0123",22,"pass123","kampot"),
  new Register("Bob","Jones","bob@example.com","0456",30,"pass456","kampot"),
];

//  Register New user
const newUser = new Register("Samon","Suon","joh@gmail.com","0965",19,"123456","kampot");

if (Register.checkEmail(newUser, existingUsers)) {
  console.log(" Email is available");
} else {
  console.log(" Email already used");
}

const books: Book[] = [
  new Book("B001", "The Great Gatsby", "Fiction", "F. Scott Fitzgerald", 1925, "9780743273565", 4, BookFormat.DIGITAL),
  new Book("B002", "1984", "Dystopian", "George Orwell", 1949, "9780451524935", 5, BookFormat.PHYSICAL),
  new Book("B003", "Clean Code", "Programming", "Robert C. Martin", 2008, "9780132350884", 2, BookFormat.PHYSICAL),
  new Book("B004", "Sapiens", "History", "Yuval Noah Harari", 2011, "9780062316097", 3, BookFormat.DIGITAL),
  new Book("B005", "To Kill a Mockingbird", "Fiction", "Harper Lee", 1960, "9780061120084", 6, BookFormat.DIGITAL)
];

// Login user

const borrowedBookIds = ["B001", "B002","B004"];
const loginUser = new Login("alice@example.com", "pass123");
if (Login.check(loginUser, existingUsers)) {
  existingUsers.forEach((user) => {
    if (
      user.getEmail() === loginUser.getEmail() &&
      user.getPassword() === loginUser.getPassword()
    ) {
      books.forEach((book) => {
        borrowedBookIds.forEach((borrowedBookId) => {
          if (book.getBookId() === borrowedBookId) {
            const borrow = new Borrow(
              [new Book (
                book.getBookId(),
                book.getBookTitle(),
                book.getBookType(),
                book.getAuthor(),
                book.getCreateYear(),
                book.getIsbnNumber(),
                book.getAvailableCopies(),
                book.getFormat()
              )],
              new User(
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getPhone(),
                user.getAge()
              ),
              new Date("2024-10-01"),
              new Date("2024-10-20"),
              BorrowStatus.RETURNED,
            );
            console.log(borrow);
          }
        });
      });
    }
  });
} else {
  console.log(" Invalid email or password");
}

