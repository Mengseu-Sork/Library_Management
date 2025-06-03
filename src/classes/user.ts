export  class User{
    userId: number|string;
    fName: string;
    lName: string;
    email: string;
    phone: string;
    age: number;
    constructor(
        userId: number|string,
        fName: string,
        lName: string,
        email: string,
        phone: string,
        age: number
        
    ) {
        this.userId = userId;
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.phone = phone;
        this.age = age;
    }
}