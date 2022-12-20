import ListItem from "./listItem";
import { motion } from "framer-motion";
import "../index.css";

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 100,
};

function ItemList(props) {
  const { changeStatusCB, deleteItemCB, query, toDoList } = props;
  return (
    <div>
      <ul>
        {toDoList
          ?.filter((x) => x.done === (query ?? x.done))
          .map((item) => {
            return (
              <motion.li key={item.key} layout transition={spring}>
                {ListItem(
                  item.name,
                  item.done,
                  item.key,
                  changeStatusCB,
                  deleteItemCB,
                  item.deleted
                )}
              </motion.li>
            );
          })}
      </ul>
    </div>
  );
}

export default ItemList;
