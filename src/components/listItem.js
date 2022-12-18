import { BsTrash } from "react-icons/bs";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { Checkbox } from "@material-tailwind/react";

import { motion } from "framer-motion";
const spring = {
  type: "spring",
  damping: 20,
  stiffness: 100,
};
function listItem(name, checked, key, changeStatusCB, deleteCB) {
  return (
    <div className="inline-flex flex-row w-full justify-between">
      <label className="mt-3 inline-flex ">
        <input
          key={key}
          type="checkbox"
          className={` checkbox z-10 cursor-pointer border rounded box-border w-6 h-6 `}
          defaultChecked={checked}
          onChange={() => changeStatusCB(key)}
        />
        <div className="form-check-input"></div>
        <span
          className={`text-gray-700 cursor-pointer select-none ml-1 font-['montserrat'] font-medium text-[18px] ${
            checked ? "line-through" : ""
          }`}
        >
          {name.replace(name[0], name[0].toUpperCase())}
        </span>
      </label>
      <BsTrash
        className="w-6 h-6 place-self-end mr-3 text-[grey]"
        onClick={() => deleteCB(key)}
      />
    </div>
  );
}

export default listItem;
