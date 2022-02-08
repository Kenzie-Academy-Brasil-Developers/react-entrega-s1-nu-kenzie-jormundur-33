import "./style.css";

function TotalMoney({ state }) {
  let filterState = state.map((amount) => amount.value);
  let result = filterState.reduce((red, redc) => redc + red);

  return (
    <div className= "total-price">
      <span>Total Amount</span>
      <p>$ {result.toFixed(2).replace(".",",")}</p>
    </div>
  );
}

export default TotalMoney;
