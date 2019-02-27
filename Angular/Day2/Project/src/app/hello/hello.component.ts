import { Component } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { HelloService } from 'src/app/hello/helloService';

@Component({
selector:'app-hello',
templateUrl:'./hello.component.html',            //used if we are using html file to display the data.
styleUrls:['./hello.component.css']

// template:`
// <h2>{{msg}}</h2>            used if we are not using seperate file to display data.yhi likha yhi 
                              //se display.
// <h2>{{location}}</h2>
// <h2>{{schedule}}</h2>

 
// `
})
export class HelloComponent{
msg:string="Angular Class";
location:string="Nagpur";
schedule='25 Feb-1 Mar';
isbtndisabled:boolean=false;
hide:boolean=true;
isSpecial:boolean=false;
canSave:boolean=false;
stylename:string="s1";
text:string=""

constructor(private hs:HelloService){}



public handleClick(e:Event):void{
    console.log("Button Clicked....")
    this.canSave=!this.canSave;
    //alert(e.type);
    //alert(e.target);
    // alert(e.target.textContent);
    //let hs:HelloService=new HelloService();
    //alert(hs.greet());
    alert(this.hs.greet())
}
public showOnClick(inputMsg):void{
    
    this.text=inputMsg;

}
}