function makeChai(quantity: number, type: string) {
  console.log(`${quantity} ${type}, tea(s)`);
}

makeChai(2, "Masala");

function getPrice(): number {
  return 10;
}

//optional param
function make(type?: string) {}
//default param
function makec(type: string = "Default Chai") {}

//Passing objects as a param and returning number datatype
function getValue(type: {
  name: string;
  age: number;
  isAlive: boolean;
}): number {
  return 0;
}

////////////////////////////////////////////////
