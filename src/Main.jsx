import { useState } from "react";

const Main = (props) => {
  const [main1, setmain] = useState({
    Firstinp1: "",
    Secondinp2: "",
  });

  const Input = (e) => {
    const { name, value } = e.target;
    setmain((oldarray) => {
      return { ...oldarray, [name]: value };
    });
  };

  const Result = () => {
    props.passnode(main1);
    setmain({
      Firstinp1: "",
      Secondinp2: "",
    });
  };

  const date = new Date().toLocaleTimeString();
  const [d1, d2] = useState(date);

  const Update = () => {
    const news = new Date().toLocaleTimeString();
    d2(news);
  };

  setInterval(Update, 1000);

  return (
    <>
      <div className="mains p-5">
        <div>
          <h1 className="bg bg-dark text-white p-3 text-center">{d1}</h1>
        </div>
        <br />
        <input
          type="text"
          placeholder="Title"
          className="form-control"
          onChange={Input}
          name="Firstinp1"
          value={main1.Firstinp1}
        />
        <br />
        <input
          type="text"
          placeholder="Write A Note"
          className="form-control"
          onChange={Input}
          name="Secondinp2"
          value={main1.Secondinp2}
        />
        <br />
        <br />
        <button onClick={Result} className="btn btn-success">
          Add A list
        </button>
      </div>
    </>
  );
};
export default Main;
