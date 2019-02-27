export class Contact{
    constructor(private name:string,private email:string){

    }
    public display():void{
        console.log('name: '+this.name+' email: '+this.email);
    }
}

let contact=new Contact('astha','16asthanema@gmail.com');
contact.display();