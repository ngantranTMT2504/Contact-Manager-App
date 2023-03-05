import { EventEmitter } from "@angular/core";
import { ICard } from "./app.models";

export class Test {
    
    static contacts: ICard[] = [
        {name: "Kalin Tran", mobile: "0789456135", email: "kalin@gmail.com", image: '/assets/images/avatar1.png'},
        {name: "John Constantine", mobile: "0831245321", email: "john@gmail.com", image: '/assets/images/avatar2.png'},
        {name: "Johnathan Ngo", mobile: "0789352894", email: "johnathan@gmail.com", image: '/assets/images/avatar3.png'},
        {name: "Scristian", mobile: "0381967211", email: "Scristian@gmail.com", image: '/assets/images/avatar4.jpg'}
    ]
    
    static addContact(name: string, mobile:string, email:string, image:string){
        Test.contacts.push({name: name, mobile: mobile, email: email, image:image})
    }
    static deleteContact(name: string, mobile:string, email:string, image:string){
        Test.contacts.pop()
    }
}