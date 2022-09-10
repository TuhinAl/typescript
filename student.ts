import {RoleEnum} from "./index";

export class Student {
    name: string;
    age: number;
    email: string
    hobby: Array<string> = [];
    isActive: boolean;
    roles: [string , number];
    role: RoleEnum

    constructor(name: string, age: number, email: string, hobby: Array<string>, isActive: boolean,
                roles: [string , number], role) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.hobby = hobby;
        this.isActive = isActive;
        this.roles= roles;
        this.role= role;
    }
}