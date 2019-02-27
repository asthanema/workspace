

export class Product {
    public code:string;
    public name:string;
    private price:number;


constructor(code:string,name:string,price:number){
    this.code=code;
    this.name=name;
    this.price=price;
}
public show():void{
    console.log('code: '+this.code +' name: '+this.name +' price: '+this.price)
}
}
var obj:Product=new Product("100","apple",100000);
obj.show();
