import Card from "../Card";
import "./style.css";

function List({ state, deleteFromList }) {
  return (
    <ul>
      {state.map((transaction, index) => (
        <Card
          deleteFromList={()=>deleteFromList(transaction)}
          children={transaction}
          key={index}
        />
      ))}
    </ul>
  );
}

export default List;
