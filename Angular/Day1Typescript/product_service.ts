import{ Product} from './product';
import {products} from './store';

export class ProductService{


    public add(p:Product):boolean{
        products.push(p);
        return true;
    }

   public findAll():Array<Product>{
       return products;
   }
   public findByCode(code:string):Product{
    products.find((n:Product)=>{n.code==code
    });
        
    
   }
   public remove(code:string):boolean{
       return null;
   }
}
var obj:ProductService=new ProductService();
console.log(obj.findByCode("1"));
console.log(obj.findAll());