import React, { useEffect, useState } from "react";

import { animate, motion } from "framer-motion";

export default function Terminal(props) {
  const hello = `\nHello! God bless you! This terminal is under construction. It'll be usable soon!\nHowever, the "hello" and "clear" command are the only ones that work!\nType them to display a message or to clear the terminal!!!`;
  const [terminalData, setTerminalData] = useState(hello);
  const [inputData, setInputData] = useState("");
  useEffect(() => {}, []);

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      switch (inputData) {
        case "clear":
          setTerminalData("");
          break;
        case "hello":
          setTerminalData(terminalData + hello);
          break;
        default:
          setTerminalData(terminalData + `\nCommand "${inputData}" not found!`);
          break;
      }
      setInputData("");
    }
  };
  return (
    <motion.div
      initial={{ scale: 0.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 100 }}
      exit={{ scale: 0.1 }}
      className="fixed inset-0 z-50 w-full h-full overflow-y-auto rounded-md glass-less"
    >
      <div className="flex flex-col items-center mt-32">
        <div className="flex flex-row items-stretch justify-between w-5/6 px-3 text-white border-t border-gray-600 rounded-t-sm bg-gradient-to-r from-gray-900 to-sky-900 h-7">
          <span>Terminal</span>
          <span>genesis@gabedev</span>
          <span
            onClick={() => props.handleTerminal()}
            className="cursor-pointer hover:text-red-400"
          >
            X
          </span>
        </div>
        <div className="flex flex-col justify-between w-5/6 p-3 h-96 bg-neutral-950 rounded-b-md bg-opacity-90">
          <textarea
            className="text-white terminal bg-neutral-950 bg-opacity-90"
            spellCheck="false"
            value={terminalData}
            cols="30"
            rows="15"
          ></textarea>
          <div className="flex flex-row">
            <label className="text-green-400">genesis@gabedev:</label>
            <input
              className="pl-2 text-white terminal w-72 bg-neutral-950 bg-opacity-90"
              spellCheck="false"
              onChange={(e) => setInputData(e.target.value)}
              onKeyUp={handleEnterPress}
              value={inputData}
              // disabled="true"
            ></input>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
