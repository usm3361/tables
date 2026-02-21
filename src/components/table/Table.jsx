import { useState } from "react";

const Table = ({ ter }) => {
  const keys = Object.keys(ter[0]);
  const [terf, setTerf] = useState(ter);

  function hendleInput(e) {
    setTerf(
      ter.filter((t) =>
        keys.some((k) => t[k].toLowerCase().includes(e.target.value)),
      ),
    );
  }
  function searchMinYear(e) {
    setTerf(ter.filter((t) => +t.iyear >= e.target.value));
  }
  return (
    <>
      <label htmlFor="allfilters">search</label>
      <input type="search" id="allfilters" onChange={hendleInput} />
      <label htmlFor="minYear">min year</label>
      <input type="search" id="minYear" onChange={searchMinYear} />

      <table border={1}>
        <thead>
          <tr>{keys.map((k) => k && <th key={k}>{k}</th>)}</tr>
        </thead>
        <tbody>
          {terf?.map((data, index) => (
            <tr key={index}>
              {keys.map((k) => k && <td key={k}>{data[k]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
