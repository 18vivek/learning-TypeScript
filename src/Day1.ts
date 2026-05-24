let tea = "masala chai";
tea = "ginger tea";
// tea = 123; NOT OK

let number = Math.random() > 0.5 ? 10 : 5;

let name: string = "Vivek";
let age: number = 25;
let isAlive: boolean = false;

console.log(name, age, isAlive);
//npx tsc
//node dist/filename.js

//Union and Any
let subs: number | string = "10 M";
let apiRequestStatus: "pending" | "success" | "error" = "pending";
apiRequestStatus = "success";

//Any

const nums = ["1", "2", "3", "4", "5"];

// let newNum;  'newNum' implicitly has an 'any' type
let newNum: string | undefined;

for (const num of nums) {
  if (num === "4") {
    newNum = num;
    break;
  }
}

console.log(newNum);
