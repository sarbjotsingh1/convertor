"use client";
import { useState } from "react";
export default function Home() {
  const [word, setWord] = useState("");
  const [digits, setDigits] = useState("");
  const [converted, setConverted] = useState(false);
  const handleWordChange = (e: any) => {
    setWord(e.target.value);
    setConverted(false);
  };

  const handleConvert = () => {
    const letterToDigitMap = {
      A: 2,
      B: 2,
      C: 2,
      D: 3,
      E: 3,
      F: 3,
      G: 4,
      H: 4,
      I: 4,
      J: 5,
      K: 5,
      L: 5,
      M: 6,
      N: 6,
      O: 6,
      P: 7,
      Q: 7,
      R: 7,
      S: 7,
      T: 8,
      U: 8,
      V: 8,
      W: 9,
      X: 9,
      Y: 9,
      Z: 9,
    };
    let digits = "";
    for (let i = 0; i < word.length; i++) {
      digits +=
        letterToDigitMap[
          word[i].toUpperCase() as keyof typeof letterToDigitMap
        ];
    }
    setConverted(true);
    setDigits(digits);
  };
  return (
    <div className="w-screen h-screen bg-gray-800 flex flex-col justify-center items-center">
      <div className="flex">
        <input
          className="border-4 g border-black"
          type="text"
          onChange={handleWordChange}
        />
        <button className="bg-blue-600" onClick={handleConvert}>
          Convert
        </button>
      </div>
      <div>
        {converted && <h4 className="text-white">Encoded : {digits}</h4>}
      </div>
    </div>
  );
}
