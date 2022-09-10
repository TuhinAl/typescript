export class Student {
    name: string;
    age: number;
    email: string
    hobby: Array<string> = [];
    isActive: boolean;


    constructor(name: string, age: number, email: string, hobby: Array<string>, isActive: boolean) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.hobby = hobby;
        this.isActive = isActive;
    }
}