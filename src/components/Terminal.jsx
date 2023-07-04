import React, { useEffect, useState } from "react";

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
    <div className="rounded-md fixed inset-0 overflow-y-auto h-full w-full z-50 glass">
      <div className="flex flex-col items-center mt-32">
        <div className="h-7 bg-zinc-800 w-5/6 rounded-t-md flex flex-row justify-between px-3 text-white">
          <span>Terminal</span>
          <span>genesis@gabedev</span>
          <span style={{cursor: 'pointer'}} onClick={() => props.handleTerminal()}>X</span>
        </div>
        <div className="h-96 bg-gray-950 w-5/6 rounded-b-md p-3 flex flex-col justify-between">
          <textarea
            className="terminal  bg-gray-950 text-white"
            spellCheck="false"
            value={terminalData}
            cols="30"
            rows="10"
          ></textarea>
          <div className="flex flex-row">
            <label className="text-green-400">genesis@gabedev:</label>
            <input
              className="terminal pl-2 w-72 bg-gray-950 text-white"
              spellCheck="false"
              onChange={(e) => setInputData(e.target.value)}
              onKeyUp={handleEnterPress}
              value={inputData}
              // disabled="true"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
