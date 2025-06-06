// import { Register } from "./classes/Register";
// import { Login } from "./classes/Login";
// import { Book } from "./classes/Book";
// import { Borrow } from "./classes/Borrow";
// import { BookFormat } from "./Enums/BookFomat";
// import { Member } from "./classes/Member";
// import { BorrowStatus } from "./Enums/BorrowStatus";
// import { User } from "./classes/user";

// const existingUsers: Register[] = [
//   new Register("John", "Doe", "john@gmail.com", "0123", 25, "pass", "kampot"),
//   new Register("Jane", "Smith", "jane@gmail.com", "0456", 28, "word", "kampot"),
//   new Register("Alice", "Smith","alice@example.com","0123",22,"pass123","kampot"),
//   new Register("Bob","Jones","bob@example.com","0456",30,"pass456","kampot"),
// ];

// //  Register New user
// const newUser = new Register("Samon","Suon","joh@gmail.com","0965",19,"123456","kampot");

// if (Register.checkEmail(newUser, existingUsers)) {
//   console.log(" Email is available");
// } else {
//   console.log(" Email already used");
// }

// const books: Book[] = [
//   new Book("B001", "The Great Gatsby", "Fiction", "F. Scott Fitzgerald", 1925, "9780743273565", 4, BookFormat.DIGITAL),
//   new Book("B002", "1984", "Dystopian", "George Orwell", 1949, "9780451524935", 5, BookFormat.PHYSICAL),
//   new Book("B003", "Clean Code", "Programming", "Robert C. Martin", 2008, "9780132350884", 2, BookFormat.PHYSICAL),
//   new Book("B004", "Sapiens", "History", "Yuval Noah Harari", 2011, "9780062316097", 3, BookFormat.DIGITAL),
//   new Book("B005", "To Kill a Mockingbird", "Fiction", "Harper Lee", 1960, "9780061120084", 6, BookFormat.DIGITAL)
// ];

// // Login user

// const borrowedBookIds = ["B001", "B002","B004"];
// const loginUser = new Login("alice@example.com", "pass123");
// if (Login.check(loginUser, existingUsers)) {
//   console.log("Login successfull!");
  
//   existingUsers.forEach((user) => {
//     if (
//       user.getEmail() === loginUser.getEmail() &&
//       user.getPassword() === loginUser.getPassword()
//     ) {
//       books.forEach((book) => {
//         borrowedBookIds.forEach((borrowedBookId) => {
//           if (book.getBookId() === borrowedBookId) {
//             const borrow = new Borrow(
//               [new Book (
//                 book.getBookId(),
//                 book.getBookTitle(),
//                 book.getBookType(),
//                 book.getAuthor(),
//                 book.getCreateYear(),
//                 book.getIsbnNumber(),
//                 book.getAvailableCopies(),
//                 book.getFormat()
//               )],
//               new User(
//                 user.getId(),
//                 user.getFirstName(),
//                 user.getLastName(),
//                 user.getEmail(),
//                 user.getPhone(),
//                 user.getAge()
//               ),
//               new Date("2024-10-01"),
//               new Date("2024-10-20"),
//               BorrowStatus.RETURNED,
//             );
//             console.log(borrow);
//           }
//         });
//       });
//     }
//   });
// } else {
//   console.log(" Invalid email or password");
// }

// === Import Classes and Enums ===
import { Register } from "./classes/Register";
import { Login } from "./classes/Login";
import { Book } from "./classes/Book";
import { Borrow } from "./classes/Borrow";
import { BookFormat } from "./Enums/BookFomat";
import { Member } from "./classes/Member";
import { BorrowStatus } from "./Enums/BorrowStatus";
import { User } from "./classes/user";
import { Librarian } from "./classes/Librarian";

// === Initialize Data ===
const existingUsers: Register[] = [
  new Register("John", "Doe", "john@gmail.com", "0123", 25, "pass", "kampot"),
  new Register("Jane", "Smith", "jane@gmail.com", "0456", 28, "word", "kampot"),
  new Register("Alice", "Smith", "alice@example.com", "0123", 22, "pass123", "kampot"),
  new Register("Bob", "Jones", "bob@example.com", "0456", 30, "pass456", "kampot"),
];

const newUser = new Register("Samon", "Suon", "joh@gmail.com", "0965", 19, "123456", "kampot");
if (Register.checkEmail(newUser, existingUsers)) {
  console.log("Email is available");
} else {
  console.log("Email already used");
}

const books: Book[] = [
  new Book("B001", "The Great Gatsby", "Fiction", "F. Scott Fitzgerald", 1925, "9780743273565", 4, BookFormat.DIGITAL),
  new Book("B002", "1984", "Dystopian", "George Orwell", 1949, "9780451524935", 5, BookFormat.PHYSICAL),
  new Book("B003", "Clean Code", "Programming", "Robert C. Martin", 2008, "9780132350884", 2, BookFormat.PHYSICAL),
  new Book("B004", "Sapiens", "History", "Yuval Noah Harari", 2011, "9780062316097", 3, BookFormat.DIGITAL),
  new Book("B005", "To Kill a Mockingbird", "Fiction", "Harper Lee", 1960, "9780061120084", 6, BookFormat.DIGITAL),
];

// === Login and Borrow ===
const borrowedBookIds = ["B001", "B002", "B004"];
const loginUser = new Login("alice@example.com", "pass123");

if (Login.check(loginUser, existingUsers)) {
  console.log("Login successful!");

  existingUsers.forEach((user) => {
    if (
      user.getEmail() === loginUser.getEmail() &&
      user.getPassword() === loginUser.getPassword()
    ) {
      books.forEach((book) => {
        if (borrowedBookIds.includes(book.getBookId())) {
          const borrow = new Borrow(
            [book],
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
            BorrowStatus.RETURNED
          );
          console.log(borrow);
        }
      });
    }
  });
} else {
  console.log("Invalid email or password");
}

// === Librarian Operations ===
const librarian = new Librarian("admin", "admin@library.com");

// Add books to librarian
books.forEach(book => librarian.addBook(book));

existingUsers.forEach(user => {
  const memberID = `M-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  const member = new Member(
    memberID,
    user.getFirstName(),
    user.getLastName(),
    user.getEmail(),
    user.getPhone(),
    user.getAge(),
    user.getPassword(),
    user.getAddress()
  );
  librarian.addMember(member);
});

// === Show as Arrays ===
console.log("\n=== Books (Array) ===");
console.log(librarian.getBooks());

console.log("\n=== Members (Array) ===");
console.log(librarian.getMembers());

// === Optional: Show readable summaries ===
console.log("\n=== Book Summaries ===");
console.log(librarian.getBooks().map(book => ({
  id: book.getBookId(),
  title: book.getBookTitle(),
  author: book.getAuthor(),
  year: book.getCreateYear(),
  format: book.getFormat(),
})));

console.log("\n=== Member Summaries ===");
console.log(librarian.getMembers().map(member => ({
  name: `${member.getFirstName()} ${member.getLastName()}`,
  email: member.getEmail(),
  phone: member.getPhone(),
  age: member.getAge(),
})));
