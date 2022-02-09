import "./style.css";

function CardSummary() {
  return (
    <div className="finance-summary">
      <h2>Finance summary</h2>
      <button className="button-everything">Everything</button>
      <button className="button-summary">Entries</button>
      <button className="button-summary">Expenses</button>
    </div>
  );
}

export default CardSummary;
