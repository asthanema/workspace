
export class Contact{
    constructor(private _name: string, private _email: string, private _cell:string){

    }

    public get name():string{
        return this._name
    }
    public set name(nm:string){
        this._name=nm;
    }
    public get email():string{
        return this._email
    }
    public set email(em:string){
        this._email=em;
    }
    public get cell():string{
        return this._cell
    }
    public set cell(c:string){
        this._cell=c;
    }
}