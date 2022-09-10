// Import stylesheets
import './style.css';
import {Student} from "./student";

// Write TypeScript code!

console.log('test')

function add(num1: number, num2: number) : number {
    return num1 + num2;
}
function addStringAndNumber(num1: string, num2: number) : number {
    return +num1 * num2;
}
function stringAdd(num1: string, num2: string) : number {
    return +(num1 + num2);
}

console.log(add(10, 12));
console.log(add(+'22', +'15'));
console.log(stringAdd('22', '15'));
console.log(addStringAndNumber('22', 2));

//================== Core types ==================
const student = new Student();

student.age = 10;
student.name = 'Tasin';
student.email = 'tasin@gmail.com';
student.isActive = true;
student.hobby = ['Playing', 'gossiping', 'outing'];
student.roles = ['Student', 1];
console.log('the student: ',student);

function combineType(num1: number | string | boolean, num2: number | string | boolean) {

    if (typeof num1 === "boolean" && typeof num2 === "boolean") {
        console.log('Both are boolean type');
    }else if (typeof num1 === "string" && typeof num2 === "string") {
        console.log('Both are String type');
    }else if (typeof num1 === "number" && typeof num2 === "number") {
        console.log('Both are number type');
    } else {
        console.log('Wrong type');
    }

}

 export enum RoleEnum {
    SUPER_ADMIN = "Super Admin",
    ADMIN = "Admin",
    ALL_USER = 'All user'
}

student.role = RoleEnum.SUPER_ADMIN;
combineType('Tuhin', 'Selim');
combineType('Tuhin', 25);
combineType(26, 25);
combineType(true, true);

console.log('the student role: ',student.role);


//============== optional argument ============

function multiplication(a: number, b: number, c?: number) {
    if (typeof c === "undefined") {
        c = 1;
    }
    // console.log('type is: ',typeof c === "undefined");
    console.log('The value is: ',(a*b*c));
    // console.log('The value of c is: ',c)
}

multiplication(10, 12);


//===================== class, inheritance and polymorphism=====================

class Person {

    name: string;
    age: string;
    email: string;

    getContact() {
        console.log('Name is: ', this.name.toUpperCase() + ' age is: ', this.age + ' email is: ', this.email);
    }


    constructor(name: string, age: string, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

class Employee extends Person{

    employeeId: string;
    companyName: string;


    constructor(name: string, age: string, email: string, employeeId: string, companyName: string) {
        super(name, age, email);
        this.employeeId = employeeId;
        this.companyName = companyName;
    }

    getEmpInfo() {
        console.log('Company name is: ', this.companyName.toLocaleUpperCase() + ' employee id is: ', this.employeeId);
    }

    getEmpName() {
        console.log(super.name.toUpperCase())
    }
}

// const person = new Person()
const employee : Person = new Employee('Alauddin Tuhin', '25', 'altuhin@gmail.com', '1251', 'eGeneration Ltd');

employee.getContact();
// employee.getEmpInfo();
// employee.getEmpName();



const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Practice</h1>`;

