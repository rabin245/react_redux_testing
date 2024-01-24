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
      <button>This button can add a new entry to the list (just joking)</button>
    </div>
  );
};

export default List;
