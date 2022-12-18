import { Button } from "@material-tailwind/react";
import { BsTrash } from "react-icons/bs";

function DeletaAllButton(props) {
  const { deleteAllCompleted, show } = props;
  return show ? (
    <div className="flex flex-row-reverse">
      <Button
        type="submit"
        onClick={() => deleteAllCompleted([])}
        className="bg-red-600 rounded inline-flex flex-row justify-center mt-9  w-[22%] h-10 "
      >
        <BsTrash className="w-[15px] h-[15px] m-auto mr-[5.5px] text-[white]" />
        <p className="m-auto ml-0 text-[white]">delete all</p>
      </Button>
    </div>
  ) : (
    <div></div>
  );
}

export default DeletaAllButton;
