import { useState } from "react";

function NavBar(props) {
  const setQueryCB = props.setQueryCB;

  const [navBarPosition, setNavBarX] = useState("translate-x-[45px]");
  const moveNavBar = (pixels, queryy) => {
    setNavBarX(pixels);
    setQueryCB(queryy);
  };

  return (
    <>
      <div className="flex mx-auto space-x-36 mb-[19px] ">
        <div className="mx-auto">
          <button onClick={() => moveNavBar("translate-x-[45px]", undefined)}>
            <h1 className="font-['Raleway'] font-bold  text-[14px] text-[#333333]  ">
              All
            </h1>
          </button>
        </div>
        <div className="mx-auto ">
          <button onClick={() => moveNavBar("translate-x-[217px]", false)}>
            <h1 className="font-['Raleway'] font-bold  text-[14px] text-[#333333]  ">
              Active
            </h1>
          </button>
        </div>
        <div className="mx-auto">
          <button onClick={() => moveNavBar("translate-x-[419px]", true)}>
            <h1 className="font-['Raleway'] font-bold  text-[14px] text-[#333333]">
              Completed
            </h1>
          </button>
        </div>
      </div>
      <div>
        <div className="border-[1px] bg-slate-600 z-0"></div>
        <div className="flex mx-auto space-x-36 mb-[19px] ">
          <div
            id="navBar"
            className={`rounded-t bg-blue-600 w-20 h-1 mt-[-4px] z-10 ${navBarPosition}`}
          ></div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
