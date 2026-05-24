//example 2
interface Cupsize {
  size: "small" | "large";
}

class Chai implements Cupsize {
  size: "small" | "large" = "large";
}

//example 2
interface TeaRecipe {
  type: string;
  sugar: number;
}

class Tea implements TeaRecipe {
  type = "Masala chai";
  sugar = 50;
}

type Response = { ok: true } | { ok: false };

// class myRes implements Response{
//     ok = true;
// }

//Literal type
type TeaType = "masala" | "ginger" | "lemon";
function orderChai(t: TeaType) {
  console.log(t);
}
///////////////////
type BaseTea = { tealeaves: number };
type Extra = { masala: number };

type MasalaTea = BaseTea & Extra;

const cup: MasalaTea = {
  tealeaves: 2,
  masala: 1,
};

type User = {
  username: string;
  bio?: string;
};

const u1: User = { username: "Vivek" };
const u2: User = { username: "Vivek", bio: "learner" };

type Config = {
  readonly appName: string;
  version: number;
};

const cfg: Config = {
  appName: "Master",
  version: 2,
};
