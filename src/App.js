import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-2000"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap fixed bottom-10 inset-x-10 py-2 justify-center bg-white rounded-md">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setColor("red")}
            className="bg-red-900 outline-none gap-3 rounded-md text-white px-2 py-1"
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="bg-green-900 outline-none gap-3 rounded-md text-white px-2 py-1"
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="bg-blue-900 outline-none gap-3 rounded-md text-white px-2 py-1"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("black")}
            className="bg-black outline-none gap-3 rounded-md text-white px-2 py-1"
          >
            Black
          </button>
          <button
            onClick={() => setColor("white")}
            className="bg-white outline-none gap-3 rounded-md text-black px-2 py-1"
          >
            White
          </button>
          <button
            onClick={() => setColor("pink")}
            className="bg-pink-900 outline-none gap-3 rounded-md text-white px-2 py-1"
          >
            Pink
          </button>
          <button
            onClick={() => setColor("purple")}
            className="bg-purple-900 outline-none gap-3 rounded-md text-white px-2 py-1"
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
