class Chai {
    name:string,
    quantity:number

    // constructor(name:string, quantity:number){
    //     this.name=name,
    //     this.quantity=quantity
    // }
    constructor(quantity:number){
        this.quantity = quantity;
        console.log(this);
        
    }
}

const newChai = new Chai(1);
newChai.name = "lemon";

///****Acess Modifier *//////
class Tea{
    public flavor: string = "Masala";
    private secretIng : string = "elaichi";
    
    
    reveal(){
        return this.secretIng;
    }
}

const newT = new Tea();
newT.reveal;

class Shop{
    protected shopName ="Chai corner";

}

class Branch extends Shop{
    getname(){
        return this.shopName;
    }
}

///we can declare private by #

class Wallet {
    #balance =100

    getBalance(){
        return this.#balance;
    }
}
const w  = new Wallet();
w.getBalance();

/// readonly in oops

class Cup{
    readonly capacity: number = 250;

    constructor(capacity:number){
        this.capacity = capacity;
    }
}

//getter setter

class ModernChai {
    private _sugar = 2;

    get sugar(){
        return this._sugar;
    }
    set sugar(value:number){
        if(value>5) throw new Error("too sweet")
        this._sugar = value;
    }

}

const c = new ModernChai();
c.sugar = 3