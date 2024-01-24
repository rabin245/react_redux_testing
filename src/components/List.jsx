import { useState } from "react";

const List = () => {
  const initialState = [
    {
      id: `${new Date().getSeconds()}`,
      description: "This is something",
      significance: 7,
    },
  ];
  const [listData, setListData] = useState(initialState);

  const handleAddEntry = () => {
    const newEntry = {
      id: `${new Date().getSeconds()}`,
      description: "New Entry",
      significance: 5,
    };

    setListData([...listData, newEntry]);
  };

  return (
    <div>
      <h1>This is a list</h1>
      <ul style={{ listStyleType: "none" }}>
        {listData.map((listItem) => {
          return (
            <li key={listItem.id} data-testid="list-item">
              {listItem.description}
            </li>
          );
        })}
      </ul>
      <button onClick={handleAddEntry}>
        This button can add a new entry to the list
      </button>
    </div>
  );
};

export default List;
