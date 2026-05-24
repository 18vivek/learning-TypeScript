//TypeNarrowing

function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai`;
  }
  return `Chai order ${kind}`;
}

function serve(msg?: string) {
  if (msg) {
    return `Serve ${msg} chai`;
  }
  return `serve default chai`;
}

function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `order a ${size} cutting chai`;
  }
  if (size === "medium" || size === "large") {
    return `order extra chai`;
  }
  return `chai order #${size}`;
}

class Kulhad {
  serve() {
    return `Serving Kulhad Chai`;
  }
}

class Masala {
  serve() {
    return `Serving Masala Chai`;
  }
}

function serveChai(chai: Kulhad | Masala) {
  if (chai instanceof Kulhad) {
    return chai.serve();
  }
}

/* Creating your own type */
type ChaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.type === "number"
  );
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai and ${item.sugar} sugar`;
  }
  return ` Serving ${item}`;
}

type MasalaChai = { type: "masala"; spicelevel: number };
type GingerChai = { type: "ginger"; amount: number };
type LemonChai = { type: "lemon"; count: number };

type Chai = MasalaChai | GingerChai | LemonChai;

function MakeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      return `Masala Chai`;
      break;

    case "ginger":
      return `Ginger Chai`;
      break;

    case "lemon":
      return `Lemon Chai`;
      break;
  }
}

function brew(order: MasalaChai | LemonChai) {
  if ("count" in order) {
    return `${order.type} Chai is ordered.`;
  }
  return `${order.type} Chai is ordered.`;
}

//Unknown dataType