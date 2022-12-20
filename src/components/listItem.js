import { BsTrash } from "react-icons/bs";
import { motion } from "framer-motion";

const transition = {
  default: {
    duration: 1,
    ease: [0, 0.71, 0.2, 1.01],
  },
};

const variants = {
  in: { opacity: 1 },
  out: { opacity: 0 },
};

function ListItem(name, checked, key, changeStatusCB, deleteCB, deleted) {
  return (
    <motion.div
      variants={variants}
      initial={{ opacity: 0 }}
      animate={deleted ? "out" : "in"}
      transition={transition}
    >
      <div className="inline-flex  flex-row w-full justify-between">
        <label className=" mt-3 inline-flex">
          <input
            key={key}
            type="checkbox"
            className={` ease-in  checkbox z-10 cursor-pointer border rounded box-border w-6 h-6 `}
            defaultChecked={checked}
            onChange={() => changeStatusCB(key)}
          />
          <div className="form-check-input"></div>
          <span
            className={` opacity-100 text-gray-700 cursor-pointer select-none ml-1 font-['montserrat'] font-medium text-[18px] ${
              checked ? "line-through" : ""
            }`}
          >
            {name.replace(name[0], name[0].toUpperCase())}
          </span>
        </label>
        <BsTrash
          className={`w-6 h-6 place-self-end mr-3 cursor-pointer text-[grey]  hover:text-[#474747] active:text-[black] `}
          onClick={async () => {
            deleteCB(key);
          }}
        />
      </div>
    </motion.div>
  );
}

export default ListItem;
