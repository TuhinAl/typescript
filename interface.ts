interface User{
    name: string;
    age?:number;
    id: string;
    email: string;
}

let user: User = {name: "Ronaldo", id:"101", email:'ronaldo@gmail.com'};
interface Employee extends User{
    salary: string;
}

let emp : Employee = {...user, salary:'150000'};

interface Login{
    login(): User;
}