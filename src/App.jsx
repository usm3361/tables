import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/table/Table";

function App() {
  const [ter, setTer] = useState();
  const url = `http://localhost:8000/api/terrorists`;

  useEffect(() => {
    async function loadDataTer() {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setTer(data);
    }
    loadDataTer();
  }, []);
  return (
    <>
      {/* <button onClick={loadDataTer}>load data</button> */}
      {ter && <Table ter={ter} />}
    </>
  );
}

export default App;
