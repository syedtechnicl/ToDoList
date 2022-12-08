import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
const App = () => {
  const [val1, setval1] = useState("");
  const [val2, setval2] = useState([]);
  const Change = (e) => {
    setval1(e.target.value);
  };

  const Result = () => {
    setval2((oldarray) => {
      return [...oldarray, val1];
    }, setval1(""));
  };

  const deleteitem = (id) => {
    setval2((oldarray) => {
      return oldarray.filter((arr, index) => {
        return index !== id;
      });
    });
  };

  const date = new Date().toLocaleTimeString();
  const [date1, setdate] = useState(date);

  const Uptime = () => {
    const namess = new Date().toLocaleTimeString();
    setdate(namess);
  };

  setInterval(Uptime, 1000);

  return (
    <>
      <div className="container p-5">
        <div className="bg bg-warning p-3 text-white">
          <h1>Date {date1}</h1>
        </div>
        <h1 className="display-1 p-2">TO DO LIST</h1>
        <input
          type="text"
          className="form-control"
          placeholder="Add a node"
          onChange={Change}
        />
        <br />
        <br />
        <button onClick={Result} className="btn btn-success">
          click me
        </button>
      </div>

      <ol>
        {val2.map((res, index) => {
          return (
            <Header key={index} id={index} text={res} onselect={deleteitem} />
          );
        })}
      </ol>
    </>
  );
};
export default App;
