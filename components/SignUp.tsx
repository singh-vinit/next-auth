"use client";

import { useState } from "react";
import axios from "axios";

interface Input {
  name: string;
  username: string;
  password: string;
}

export default function SignUp() {
  const [inputValue, setInputValue] = useState<Input>({
    name: "",
    username: "",
    password: "",
  });

  async function handleBtn() {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/signup",
        inputValue
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-[24rem] border shadow-lg rounded p-4 bg-gray-200">
      <div className="flex flex-col mb-4">
        <label className="text-lg font-bold">name</label>
        <input
          type="text"
          value={inputValue.name}
          onChange={(e) =>
            setInputValue({ ...inputValue, name: e.target.value })
          }
          className="border border-gray-600 rounded-md p-1"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-lg font-bold">username</label>
        <input
          type="text"
          value={inputValue.username}
          onChange={(e) =>
            setInputValue({ ...inputValue, username: e.target.value })
          }
          className="border border-gray-600 rounded-md p-1"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-lg font-bold">password</label>
        <input
          type="password"
          value={inputValue.password}
          onChange={(e) =>
            setInputValue({ ...inputValue, password: e.target.value })
          }
          className="border border-gray-600 rounded-md p-1"
        />
      </div>
      <button
        onClick={handleBtn}
        className="w-full py-1 bg-black text-white font-medium rounded-sm mt-4"
      >
        signup
      </button>
    </div>
  );
}
