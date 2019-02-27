import { Component, OnInit } from '@angular/core';
 
import { ContactService } from 'src/app/contact/contactService';
import { Contact } from 'src/app/contact/contact';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers:[ContactService]
})
export class ContactComponent implements OnInit,OnDestroy {
  cso=null;
  private contacts: Array<Contact>;
  // private contactService:ContactService=new ContactService();

  constructor(private cs:ContactService) {}  

  ngOnInit() {
//this.contacts=this.cs.findAll();........normal without promise
    
    
    // this.cs.findAllP().then((data)=>   //......using Promise
    // {this.contacts=data
    // });

    this.cso=this.cs.findAllO().subscribe((data)=>{
      this.contacts=data;
    });
  }

  public addToTable(nm:any,em:any,cl:any)
  {
   this.cs.add(nm ,em,cl);
  }
  public delete(c:Contact){
     this.cs.delete(c);
  }

 ngOnDestroy(){
  // this.cso.unsubscribe();
 }
 }