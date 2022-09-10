// Import stylesheets
import './style.css';

// Write TypeScript code!

console.log('test')

function add(num1: number, num2: number) : number {
    return num1 + num2;
}
function stringAdd(num1: string, num2: string) : number {
    return +(num1 + num2);
}

console.log(add(10, 12));
console.log(add(+'22', +'15'));
console.log(stringAdd('22', '15'));

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Practice</h1>`;