import { Injectable } from "@angular/core";

@Injectable()
export class HelloService{
    public greet():string{
        return "hello..."
    }
}