import "./style.css";
import { FaTrash } from "react-icons/fa";
function Card({ children, index, deleteFromList }) {
  return (
    <>
      {children.value > 0 || children.type === "entry"
        ? [
            <li key={index} className="card-positive card">
              <div>
                <h2>{children.description}</h2>
                <p>Entry</p>
              </div>

              <div className="div-right-side card">
                <h3>$ { children.value.toFixed(2)}</h3>
                <button  onClick={deleteFromList}>
                  <FaTrash className="delete-icon" />
                </button>
              </div>
            </li>,
          ]
        : [
            <li key={index} className="card-negative card">
              <div>
                <h2>{children.description}</h2>
                <p>Expense</p>
              </div>

              <div className="div-right-side card">
                <h3>$ {Math.abs( children.value).toFixed(2).replace(".",",")}</h3>
                <button onClick={deleteFromList}>
                  <FaTrash className="delete-icon" />
                </button>
              </div>
            </li>,
          ]}
    </>
  );
}

export default Card;
