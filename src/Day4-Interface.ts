interface Chai {
  flavour: string;
  quantity: number;
  milk?: boolean;
}

const obj: Chai = {
  flavour: "afim",
  quantity: 2,
};

interface order {
  readonly id: number;
  name: string;
}

const s: order = { id: 1, name: "sfjorg" };
// s.id=2; not possible

////Functionality in interface
interface Discount {
  (price: number): number;
}
const apply50: Discount = (p) => p * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log("start machine");
  },
  stop() {
    console.log("stop machine");
  },
};

///Used in Index signature
interface ChaiRating {
  [flavour: string]: number;
}
const ratings: ChaiRating = {
  ginger: 4.5,
  masala: 5.0,
};

//we can merge multiple interface in TS
//method 1 : where interface name are same
interface User {
  name: string;
}
interface User {
  age: number;
}

const profile : User = {
    name:"Vivek",
    age:25
}
//Method 2 : By using "extends" by another interface
interface A {a:string};
interface B{b:string};

interface C extends A,B{}
