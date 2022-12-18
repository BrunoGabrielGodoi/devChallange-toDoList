import listItem from "./listItem";

function ItemList(props) {
  const { changeStatusCB, deleteItemCB, query, toDoList } = props;
  return (
    <div>
      <ul>
        {toDoList
          ?.filter((x) => x.done == (query ?? x.done))
          .map((item) => {
            return (
              <li key={item.key}>
                {listItem(
                  item.name,
                  item.done,
                  item.key,
                  changeStatusCB,
                  deleteItemCB
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default ItemList;
