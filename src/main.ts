import { Register } from "./classes/Register";
import { Login } from "./classes/Login";
import { Book } from "./classes/Book";




//  existingUsers
const existingUsers: Register[] = [
    new Register("John", "Doe", "john@gmail.com", "0123", 25, "pass"),
    new Register("Jane", "Smith", "jane@gmail.com", "0456", 28, "word"),
     new Register("Alice", "Smith", "alice@example.com", "0123", 22, "pass123"),
    new Register("Bob", "Jones", "bob@example.com", "0456", 30, "pass456")
];



//  Register New user
const newUser = new Register("Samon", "Suon", "joh@gmail.com", "0965", 19, "123456");

if (Register.checkEmail(newUser, existingUsers)) {
    console.log("✅ Email is available");
} else {
    console.log("❌ Email already used");
}



// Login user
const loginUser = new Login("aLice@example.com", "pass123");

if (Login.check(loginUser, existingUsers)) {
    console.log("✅ Login successful");
} else {
    console.log("❌ Invalid email or password");
}


// Create BookID objects

// Create Book object
const book = new Book(
  "AA1",
  "The Pragmatic Programmer", // BookName
  "Non-Fiction",              // BookType
  "Andy Hunt & Dave Thomas",  // Author
  "Programming",              // Category
  1999,                       // CreateYear
  5                           // AvailableNumber
)
;

// Display book info
console.log(" Book Name:", book.getBookName());
console.log(" Book IDs:", book.getBookIDs());
console.log(" Author:", book.getAuthor());
console.log(" Category:", book.getCategory());
console.log(" Year:", book.getCreateYear());
console.log(" Available Copies:", book.getAvailableNumber());
