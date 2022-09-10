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

console.log('the student: ',student);

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Practice</h1>`;

