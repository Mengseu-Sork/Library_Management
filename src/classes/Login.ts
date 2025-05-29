import { Register } from "./Register"

export class Login{
    private email:string
    private password:string
    constructor(email:string,password:string){
        this.email=email
        this.password=password
    }
    public getEmail(): string {
        return this.email;
    }

    public getPassword(): string {
        return this.password;
    }
    public static check(login: Login, registeredUsers: Register[]): boolean {
        for (let user of registeredUsers) {
            if (user.getEmail() === login.getEmail() &&user['password'] === login.getPassword() 
                 ) {
                return true; 
            }
        }
        return false; 
    }
}
