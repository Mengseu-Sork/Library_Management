
import { Register } from "./Register"

export class Login {
    // Private variables to store email and password
    private email: string
    private password: string

    // Constructor to set the email and password when a new Login object is created
    constructor(email: string, password: string) {
        this.email = email
        this.password = password
    }

    // Public method to get the email
    public getEmail(): string {
        return this.email;
    }

    // Public method to get the password
    public getPassword(): string {
        return this.password;
    }

    // Static method to check if the login info matches any registered user
    public static check(login: Login, registeredUsers: Register[]): boolean {
        // Loop through the array of registered users
        for (let user of registeredUsers) {
            // Compare the email and password
            if (user.getEmail() === login.getEmail() && user['password'] === login.getPassword()) {
                return true; // Login is successful
            }
        }
        return false; // Login failed
    }
}
