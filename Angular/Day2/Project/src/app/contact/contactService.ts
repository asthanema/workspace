 import {Contact} from './contact';
 import {contacts} from './store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
// import { setTimeout } from 'timers';
// import { Promise } from 'q';

@Injectable()
 export class ContactService {
     private contacts:Array<Contact>
     constructor(){
         this.contacts=contacts;
     }
     public findAll():Array<Contact>{
         return this.contacts
    }
    public findAllP():Promise<Array<Contact>>{
     let p:Promise<Array<Contact>>=new Promise((resolve,reject)=>
     {
     resolve(this.contacts);
     })
     return p;
    }

    public findAllO():Observable<Array<Contact>>{
        var obs=Observable.create((o)=>{
            o.next(this.contacts);
        //     setTimeout(()=>
        // {
        //     o.next([(new Contact("abc","asdfgh","ygy"))])
        // },4000);
        // //o.complete();
         });
        return obs;
    }
    
    public add(nm:string,em:string,cl:string){
        if(nm!="" &&  em!="" && cl!="")
        this.contacts.push(new Contact(nm,em,cl))
        else
        alert("Error:Please input all the fields!!")
    }
    public delete(c:Contact){
        let index=this.contacts.indexOf(c);
        this.contacts.splice(index,1);
    }
}