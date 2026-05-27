import "./App.css";
import { ChaiCard } from "./components/ChaiCard";
import { Counter } from "./components/Counter";
import {ChaiList} from "./components/ChaiList";
import type { Chai } from "./types";
import { OrderForm } from "./components/OrderForm";
import { Card } from "./components/Card";

const menu : Chai[]=[
  {id:1, name:"Masala", price:20},
  {id:2, name:"Elaichi", price:30},
  {id:3, name:"lemon", price:40},
]
function App() {
  return (
    <>
      <div>
        <h1>My First React + TypeScript Project.</h1>
      </div>
      <ChaiCard
      name = "Vivek"
      price={500} />

      <div>
        <Counter/>
      </div>

      <div>
        <ChaiList items={menu}/>
      </div>

      <div>
        <OrderForm 
        onSubmit={(order)=>{
          console.log("Placed: ", order.name, order.cups);
          
        }}/>
      </div>

      <div>
        <Card
        title="Chai aur TypeScript"
        footer={<button>Order Now</button>}/>
      </div>
    </>
  );
}

export default App;
