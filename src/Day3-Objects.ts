let tea : {
    name : string;
    price : number;
    isHot : boolean
}

tea = {
    name : "MAsala chai",
    price : 20,
    isHot : true 
}
/////////////////////////////////////////////////////
type Cup = {size: string}
let smallCup: Cup = {size:"200ml"}
let mediumCup = { size: "500ml", type:"steel" };
smallCup = mediumCup;
////////////////////////////////////////////////////

type Brew = {brewTime : number}
const coffee:Brew = {brewTime:5}
const teaBrew:Brew = coffee

///////////////////////////////////////////////////

type User = {
    username: string;
    password: string
}

const u:User ={
    username:"chaicode",
    password:"123"
}
///////////////////////////////////////////////////
type Item ={name:string, quantity:number}
type Address ={stree:string, pin:number}

type Order = {
    id:string;
    item:Item[];
    address:Address;
}
/////////////////Partial Update////////////////////
type Chai ={
    name:string;
    price:number;
    isHot:boolean
}

const updateChai = (updates : Partial<Chai>) =>{
        console.log("updating chai with ", updates);
        
}
updateChai({name:"ginger"})
updateChai({ price: 25 });
updateChai({ isHot: true });
updateChai({}) ///downside of partial update is that we can update with an empty object

/////////////////Required Update////////////////////
type ChaiOrder = {
  name: string;
  quantity: number;
};

const orderChai = (order: Required<ChaiOrder>)=>{
    console.log(order);
}

orderChai({name:"ginger", quantity:2})

////////////////Pick update////////////////////////
type ChaiPrice = {
  name: string;
  quantity: number;
  isHot : boolean;
};

type BasicChaiInfo = Pick<ChaiPrice, "name"|"isHot">;

const chainfo :BasicChaiInfo = {
    name :"Lemon Tea",
    isHot:true
}
/////////////Omit //////////////////////////////
type OmitChaiinfo = Omit<ChaiPrice, "isHot">

const OmitChai : OmitChaiinfo ={
    name:"lemon",
    quantity:2,
    // isHot:false, Not ok
}
////////////////////////////////////////////////
