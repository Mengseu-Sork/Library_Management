export class Register {
    private static nextId = 1; // static counter to generate unique IDs

    private id: number;
    private fName: string;
    private lName: string;
    private email: string;
    protected phone: string;
    private age: number;
    private password: string;
    protected address: string; // optional property

    constructor(fName: string, lName: string, email: string, phone: string, age: number, password: string, address: string) {
        this.id = Register.nextId++; // auto-increment ID
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.phone = phone;
        this.age = age;
        this.password = password;
        this.address = address; // optional property
    }

    public getId(): number|string {
        return this.id;
    }

    public getEmail(): string {
        return this.email;
    }

    getFirstName():string{
        return this.fName
    }
    getLastName():string{
        return this.lName
    }
    getPhone(): string{
        return this.phone
    }
    getAge():number{
        return this.age
    }
    getAddress(): string {
        return this.address;
    }
    getPassword(): string {
        return this.password;
    }
    // check new regisster if user use email that use already they can not do it
    public static checkEmail(register: Register, existingUsers: Register[]): boolean {
        const newEmail = register.getEmail();
        for (let user of existingUsers) {
            if (user.getEmail() === newEmail) {
                return false; 
            }
        }
        return true; 
    }
     
}
