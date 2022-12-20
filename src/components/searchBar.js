import { Button, Checkbox } from "@material-tailwind/react";

import { useState, useRef } from "react";

function SearchBar(props) {
  const addItemCB = props.addItemCB;
  let [inputValue, setInputValue] = useState("");
  const textInput = useRef(null);

  const AddItem = () => {
    addItemCB(inputValue);
    setInputValue("");
  };
  return (
    <div className={`flex flex-row h-14`}>
      <input
        autoFocus
        ref={textInput}
        type="text"
        value={inputValue}
        onKeyDown={(event) => {
          if (event.key == "Enter") AddItem();
        }}
        className={`p-3 rounded-xl border-[1px] flex-auto h-[100%] mx-auto w-4/5  font-['montserrat'] font-[14px] ${
          inputValue != "" ? "text-[black]" : "text-[#828282]"
        } `}
        placeholder="What's on your mind?"
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <Button
        type="submit"
        children={"Add"}
        className={`bg-blue-600 flex-auto rounded-xl h-[100%] w-1/5 ml-6 text-[white]  font-['montserrat']`}
        onClick={() => AddItem()}
      />
    </div>
  );
}

export default SearchBar;
