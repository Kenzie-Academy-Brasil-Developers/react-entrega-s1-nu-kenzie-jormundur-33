import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import Card from "./components/Card";
import Form from "./components/Form";
import nukenzie from "./img/nukenzie.svg";
import NoCard from "./components/NoCard";
import nocard from "./img/nocard.svg"

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "Entrada", value: 2500 },
    { description: "Conta de luz", type: "Saída", value: -150 }]);
  console.log(listTransactions);

  function deleteFromList(comparison) {
    let filterList = listTransactions.filter(
      (listItem) => listItem !== comparison
    );

    setListTransactions(filterList);
    console.log(filterList);
    console.log("kek");
  }

  return (
    <div className="App">
      <header>
        <img src={nukenzie} alt="a"/>
        <button>Exit</button>
      </header>

      {listTransactions.length>0?(
        <>
      <Form state={listTransactions} setState={setListTransactions} />

 <TotalMoney state={listTransactions} />
 <List deleteFromList={deleteFromList} state={listTransactions} />
 </>
      ):(
        <>
      <Form state={listTransactions} setState={setListTransactions} />

      <NoCard card={nocard}/>
        </>
      )}
     
    </div>
  );
}

export default App;
