import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 private users: Array<User>;
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }
 
public getData():void{
  // alert("han aa rha h")
  let url="http://localhost:3000/users"
  this.httpClient.get<Array<User>>(url).subscribe((data)=>{
    // alert(JSON.stringify(data));
    this.users=data;
  })
}

public postData():any{
  let url="http://localhost:3000/users";
  let users={id:"1",name:"astha",username:"16astha",email:"astha_nema@gmail.com"}
  this.httpClient.post(url,users).subscribe((data)=>{
   console.log(data);
  })
}

}
