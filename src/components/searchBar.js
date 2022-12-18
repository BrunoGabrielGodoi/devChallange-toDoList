import { BsTrash } from "react-icons/bs";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { Button, Checkbox } from "@material-tailwind/react";

import { motion } from "framer-motion";
import { useState } from "react";

function searchBar(props) {
  const addItemCB = props.addItemCB;
  let [inputValue, setInputValue] = useState("");

  return (
    <div className={`flex flex-row h-14`}>
      <input
        type="text"
        value={inputValue}
        className={`p-3 rounded-xl border-[1px] flex-auto h-[100%] mx-auto w-4/5  font-['montserrat'] font-[14px] ${
          inputValue != "" ? "text-[black]" : "text-[#828282]"
        } `}
        placeholder="add details"
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <Button
        children={"Add"}
        className={`bg-blue-600 flex-auto rounded-xl h-[100%] w-1/5 ml-6 text-[white]  font-['montserrat']`}
        onClick={() => {
          addItemCB(inputValue);
          setInputValue("");
        }}
      />
    </div>
  );
}

export default searchBar;
