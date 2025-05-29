export class Register {
    private fName: string;
    private lName: string;
    private email: string;
    private phone: string;
    private age: number;
    private password: string;

    constructor(fName: string, lName: string, email: string, phone: string, age: number, password: string) {
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.phone = phone;
        this.age = age;
        this.password = password;
    }

    public getEmail(): string {
        return this.email;
    }
        public static checkEmail(register:Register,existingUsers:Register[]): boolean{
            const newEmail= register.getEmail().toLowerCase();
                for (let user of existingUsers) {
                if (user.getEmail().toLowerCase() === newEmail) {
                return false;
                }
            }
            return true 
        }
}
