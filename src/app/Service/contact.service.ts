import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { ICard } from '../app.models';


@Injectable()
export class ContactService {
  constructor(private http : HttpClient){}

  createContact(contacts:{name: string,mobile: string,email: string,image: string}){
    this.http.post('https://contact-manager-411f0-default-rtdb.firebaseio.com/contacts.json', contacts)
    .subscribe((res) => {console.log(res)});
  }

  fetchContact(){
    return this.http.get('https://contact-manager-411f0-default-rtdb.firebaseio.com/contacts.json')
    .pipe(map((res)=> {
      const contacts = [];
      for(const key in res){
        contacts.push({...res[key],id: key})
      }
      return contacts;
    }))
  }

  updateContact(id: string, contact: ICard){
    this.http.put('https://contact-manager-411f0-default-rtdb.firebaseio.com/contacts/'+id+'.json', contact)
    .subscribe();
  }

  deleteContact(id: string){
    this.http.delete('https://contact-manager-411f0-default-rtdb.firebaseio.com/contacts/'+id+'.json')
    .subscribe();
  }

  clearContact(){
    this.http.delete('https://contact-manager-411f0-default-rtdb.firebaseio.com/contacts.json')
    .subscribe();
  }
}
