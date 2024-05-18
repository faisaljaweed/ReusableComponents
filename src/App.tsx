import { useState } from "react";
import "./App.css";
import Button from "./Components/Button";
import Input from "./Components/Input";
import Table from "./Components/Table";

function App() {
  const [count, setCount] = useState("");
  const [add, setAdd] = useState<any>([]);

  const Additem = () => {
    if (!count) return;
    // const newAdd = [...add, count];
    // setAdd(newAdd);
    add.push(count);
    setAdd([...add]);
    console.log([...add]);
    setCount("");
  };
  return (
    <>
    <div className="flex gap-3 mb-4">
      <Input
      className="p-4 border border-2 border-black hover:bg-gray-700 hover:text-white text-white bg-[#212121]"
        placeholder="Enter Your Data"
        value={count}
        onChange={(e: any) => {
          setCount(e.target.value);
        }}
      />
      <Button className="p-4 bg-red-700 text-white hover:bg-[#212121]" text="ADD" onClick={Additem} />
      </div>
      <Table add={add} />
    </>
  );
}

export default App;
