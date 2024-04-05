import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setName } from "../redux/slices/nameSlice";

const Home = () => {
  const [inputName, setInputName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const newName = event.target.value;
    setInputName(newName);
    dispatch(setName(newName));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4 text-lg font-bold text-center">
        Hello! This is an assignment for AEONAXY-TECHNOLOGY
      </div>
      <input
        type="text"
        value={inputName}
        onChange={handleChange}
        className="border-2 border-black px-3 py-2 mb-4 rounded-md text-center"
        placeholder="Enter your name..."
      />
      <button
        className={`px-4 py-2 rounded-md ${
          inputName
            ? "bg-black text-white cursor-pointer hover:bg-gray-900"
            : "bg-gray-300 text-gray-600 cursor-not-allowed"
        }`}
        disabled={!inputName}
      >
        <Link to="/country">Continue</Link>
      </button>
    </div>
  );
};

export default Home;
