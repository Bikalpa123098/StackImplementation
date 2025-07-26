import React, { useState } from "react";

const Stack = () => {
  const [num, setNum] = useState("");
  const [stack, setStack] = useState([]);
  const [message, setMessage] = useState("");
  const maxSize = 5;

  const handlePush = () => {
    if (stack.length >= maxSize) {
      setMessage("Stack is full. Cannot push more items.");
    } else if (num !== "") {
      setStack([...stack, num]);
      setNum("");
      setMessage("");
    }
  };

  const handlePop = () => {
    if (stack.length === 0) {
      setMessage("Stack is already empty!");
    } else {
      const popped = stack[stack.length - 1];
      setStack(stack.slice(0, -1));
      setMessage(`Popped: ${popped}`);
    }
  };

  const handleIsEmpty = () => {
    setMessage(stack.length === 0 ? "Stack is empty" : "Stack is not empty");
  };

  const handleIsFull = () => {
    setMessage(stack.length === maxSize ? "Stack is full" : `Stack is not full. Its max size is ${maxSize}`);
  };

  return (
    <div className="min-h-screen bg-lime-200 p-4 flex flex-col items-center">
      <div className="w-full max-w-md bg-blue-300 rounded-lg shadow-xl py-6 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-700 text-center mb-4">Stack</h1>
        <ul className="flex flex-col-reverse items-center">
          {stack.map((item, index) => (
            <li
              key={index}
              className="w-full sm:w-72 px-4 py-3 my-1 text-center border-black border-4 border-t-0 text-xl sm:text-2xl font-bold bg-red-600 text-white rounded"
            >
              {item}
            </li>
          ))}
        </ul>
        {message && (
          <p className="mt-4 text-center text-lg sm:text-xl font-semibold text-purple-700">{message}</p>
        )}
      </div>

      <div className="mt-6 w-full max-w-md flex flex-col items-center space-y-4">
        <input
          className="w-full px-4 py-3 text-lg sm:text-2xl rounded-3xl bg-gray-200 border-2 border-black"
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          placeholder="Enter number"
        />

        <div className="w-full flex flex-wrap justify-center gap-3 mt-2">
          <button onClick={handlePush} className="bg-green-500 px-4 py-2 rounded-xl font-bold text-white">
            Push
          </button>
          <button onClick={handlePop} className="bg-red-500 px-4 py-2 rounded-xl font-bold text-white">
            Pop
          </button>
          <button onClick={handleIsEmpty} className="bg-yellow-500 px-4 py-2 rounded-xl font-bold text-white">
            Is Empty
          </button>
          <button onClick={handleIsFull} className="bg-indigo-500 px-4 py-2 rounded-xl font-bold text-white">
            Is Full
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stack;
