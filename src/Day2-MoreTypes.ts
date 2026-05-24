//forceful type assertion
//ex 1
let response: any = "42";
let numLength: number = (response as string).length;

//ex 2
type Book = {
  name: string;
};

let bookString = `{"name":"Who moved my Cheese"}`;
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);

const inputElement = document.getElementById("username") as HTMLInputElement;

//difference between any and unknown

let value: any;
value = "abc";
value = 4;
value = [4, 5, 6];
value.toUpperCase();

let newValue: unknown;
newValue = "abc";
newValue = 4;
newValue = [4, 5, 6];
// newValue.toUpperCase();

if(typeof newValue === "string"){
    newValue.toUpperCase();
}


type Role = "admin"|"user"|"QA";

function redirectRole(role : Role) : void{
    if(role === "admin"){
        console.log("redirecting admin dashboard");
        return;
    }
    if(role === "QA"){
        console.log("redirecting tester dashboard");
     return;
    }
    role;
}


//never Data Type
function neverReturn():never{
    while(true){}
}