import { BsTrash } from "react-icons/bs";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

import { motion } from "framer-motion";
const spring = {
  type: "spring",
  damping: 20,
  stiffness: 100,
};
function card(title, description, image, id, onDeleteCB, onChangeOrderCB) {
  return (
    <motion.li key={title} layout transition={spring}>
      <div className="cookieCard flex mb-8 ">
        <div className="ml-[31px] mt-[20px]  mb-[21px]">
          <img src={image} className="max-w-none w-[102px] h-[104px]" />
        </div>
        <div className="font-['nunito'] ml-[31px] leading-0 ">
          <p className=" text-[20px] font-semibold mb-1 mt-8 ">{title}</p>
          <p className=" text-[16px] font-normal text-[#858585] w-[278px]">
            {description}
          </p>
        </div>
        <div className="grow flex items-center justify-center ">
          <button
            className="bg-[#FF067E] w-11 h-11 flex items-center justify-center hover:bg-[#b90462]"
            onClick={() => onDeleteCB(id)}
          >
            <BsTrash className="w-6 h-6" />
          </button>
          <div className="m-auto space-y-[16px]">
            <button
              className="bg-[#E9E9E9] w-11 h-11 flex items-center justify-center hover:bg-[#bbbbbb]"
              onClick={() => onChangeOrderCB(id, id - 1)}
            >
              <SlArrowUp className="w-6 h-6" />
            </button>
            <button
              className="bg-[#E9E9E9] w-11 h-11 flex items-center justify-center hover:bg-[#bbbbbb]"
              onClick={() => onChangeOrderCB(id, id + 1)}
            >
              <SlArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </motion.li>
  );
}

export default card;
