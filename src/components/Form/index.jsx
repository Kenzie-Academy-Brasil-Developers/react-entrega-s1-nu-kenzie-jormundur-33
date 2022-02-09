import { useState } from "react";
import "./style.css";
function Form({ state, setState }) {
  const [userDescription, setUserDescription] = useState("");
  const [userValue, setUserValue] = useState(1);
  const [userValue2, setUserValue2] = useState("entry");
  console.log(userValue);
  console.log(userDescription);
  console.log(userValue2);
  // console.log({
  //   description: userDescription,
  //   value: userValue,
  //   type: userValue2,

  // });

  function handleSelect(ev) {
    setUserValue2(ev.target.value);
    console.log(userValue2);
  }
  return (
    <form className="form">
      <div className="description">
        <h2>Description</h2>
        <input
          type="text"
          placeholder="Type your description"
          value={userDescription}
          onChange={(ev) => setUserDescription(ev.target.value)}
        />
        <p>Ex: Laundry</p>
      </div>
      <div className="value-and-type">
        <div className="value">
          <h2>Value</h2>
          <label price="$">
            <input
              type="number"
              value={userValue}
              onChange={(ev) =>
                userValue2 === "expense"
                  ? setUserValue(-Math.abs(Number(ev.target.value)))
                  : setUserValue(Math.abs(Number(ev.target.value)))
              }
            />
          </label>
        </div>
        <div className="type-of-value">
          <h2>Type of value</h2>
          <div className="select-div">
            <select placeholder="Choose:" value={userValue2} onChange={handleSelect}>
              <option value="entry">Entry</option>
              <option value="expense">Expense</option>
            </select>
          </div>
        </div>
      </div>
      <button
        onClick={(ev) => {
          ev.preventDefault();

          if (userDescription.length < 0 || userDescription === "") {
            console.log("error");
          }

          if (userValue2 === "entry") {
            setState([
              ...state,
              {
                description: userDescription,
                value: Math.abs(userValue),
                type: userValue2,
              },
            ]);
          } else {
            setState([
              ...state,
              {
                description: userDescription,
                value: -Math.abs(userValue),
                type: userValue2,
              },
            ]);
          }

          setUserDescription("");
          setUserValue("");
        }}
      >
        Insert value
      </button>
    </form>
  );
}

export default Form;
