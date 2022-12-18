import { useEffect, useState } from "react";
import SearchBar from "../components/searchBar";
import ItemList from "../components/itemList";
import Title from "../components/title";
import DeletaAllButton from "../components/deleteAll";
import NavBar from "../components/navBar";

function ToDoList() {
  const [toDoList, setToDoList] = useState(
    localStorage.getItem("toDoList")
      ? JSON.parse(localStorage.getItem("toDoList"))
      : []
  );
  const [query, setQuery] = useState(undefined);

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }, [toDoList]);

  const changeStatusCB = (key, event) => {
    let index = toDoList.findIndex((x) => x.key == key);
    toDoList[index].done = toDoList[index].done ? false : true;
    setToDoList([...toDoList]);
  };

  const deleteItemCB = (key, event) => {
    let index = toDoList.findIndex((x) => x.key == key);
    toDoList.splice(index, 1);
    setToDoList([...toDoList]);
  };

  const addItemCB = (item) => {
    toDoList.push({
      key: (toDoList[toDoList.length - 1]?.key ?? 0) + 1,
      name: item,
      done: false,
    });
  };

  const deleteAllCompleted = () => {
    const newList = toDoList.filter((x) => x.done == false);
    setToDoList([...newList]);
  };

  return (
    <div
      className="flex max-w-[570px] mx-auto flex-col h-screen"
      color="#1E1E1E"
    >
      <Title />
      <NavBar setQueryCB={(value) => setQuery(value)} />
      <SearchBar addItemCB={(value) => addItemCB(value)} />
      <ItemList
        toDoList={toDoList}
        query={query}
        changeStatusCB={(key, event) => changeStatusCB(key, event)}
        deleteItemCB={(key, event) => deleteItemCB(key, event)}
      />
      <DeletaAllButton
        show={query}
        deleteAllCompleted={() => deleteAllCompleted()}
      />
    </div>
  );
}

export default ToDoList;
