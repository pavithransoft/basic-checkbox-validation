import { useRef, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const checkbox = useRef();

  const handleClick = () => {
    if (checkbox.current.checked) {
      setMessage("You know JS");
    } else {
      setMessage("You don't know JS");
    }
  };

  return (
    <div className="bg-blue-900 w-screen h-screen flex items-center">
      <div className="bg-white p-2 rounded-lg ml-[38rem] w-80">
        <div className="flex flex-row gap-2 ml-[6rem] p-2">
          <input
            type="checkbox"
            id="agree"
            ref={checkbox}
            className="h-5 w-5"
            onClick={handleClick}
          />
          <label
            htmlFor="agree"
            className="font-semibold -mt-[0.15rem] text-green-700"
          >
            Agree
          </label>
        </div>
        <p className="p-2 text-center font-medium">{message}</p>
        <button className="h-full w-full text-lg text-blue-900 font-bold border-4 border-sky-500 p-2 rounded-lg hover:text-white hover:bg-sky-500 hover:border-blue-900">
          Done
        </button>
      </div>
    </div>
  );
}
