const chaiflavors: string[] = ["Vivek", "Anirudh", "AD"];
const chaicode: number[] = [45, 485, 852];
const rating: Array<number> = [4.5, 8.5, 7.7];

type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  {
    name: "Adrak",
    price: 10,
  },
  {
    name: "lemon",
    price: 20,
  },
];

//readonly

const cites: readonly string[] = ["Delhi", "Chandrapur", "noida"];
// cites.push("pune");

///Two dimesion arrays

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

///Tuples

let chaiTuple: [number, string]
chaiTuple = [1, "Vivek"]
chaiTuple = [2, "Mohit"]
chaiTuple = [3, "Abhijeet"]

let userTuple : [string, number, boolean?]
userTuple = ["mohit", 26, true]
userTuple = ["Abhijeet", 26, true]
userTuple = ["Vivek", 26];

//readonly tuple
const utuple : readonly[string, number] =["vivek",25];

//named tuple
let utupel : [name:string, age:number] = ["vivek",25];

////ENUM

enum CupSize{
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.SMALL;

//incremental values

enum Status {
    pending = 100,
    success,
    failed
}

enum ChaiType{
    MASALA = "masala",
    GINGER = "ginger"
}

function make(type:ChaiType){
    console.log(`${type}`);
}
make(ChaiType.MASALA)
make(ChaiType.GINGER)
