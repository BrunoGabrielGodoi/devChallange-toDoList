import { BsTrash } from "react-icons/bs";

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 100,
};
function ListItem(name, checked, key, changeStatusCB, deleteCB) {
  return (
    <div className="inline-flex flex-row w-full justify-between">
      <label className="mt-3 inline-flex ">
        <input
          key={key}
          type="checkbox"
          className={`checkbox z-10 cursor-pointer border rounded box-border w-6 h-6 `}
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
        href="#"
        className={`w-6 h-6 place-self-end mr-3 cursor-pointer text-[grey]  hover:text-[#474747] active:text-[black] `}
        onClick={() => deleteCB(key)}
      />
    </div>
  );
}

export default ListItem;
