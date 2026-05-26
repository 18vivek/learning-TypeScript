function wrapInArray<T>(item: T): T[] {
  return [item];
}
wrapInArray("Vivek");
wrapInArray(25);
wrapInArray({ address: "Chandrapur,Maharashtra" });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("masala", 20);
pair("masla", { quantity: 5 });

//Generic interface
interface Box<T> {
  content: T;
}
const numberBox: Box<number> = { content: 5 };
const stringBox: Box<string> = { content: "five" };

interface ApiPromise<T> {
  status: number;
  data: T;
}

const res: ApiPromise<{ flavour: string }> = {
  status: 200,
  data: { flavour: "ginger" },
};
