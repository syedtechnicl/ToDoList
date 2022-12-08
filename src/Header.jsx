const Header = (props) => {
  return (
    <>
      <div>
        <i
          className="fa fa-times"
          onClick={() => {
            props.onselect(props.id);
          }}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <li
                className="bg bg-black text-white p-4 fw-bold"
                style={{ fontSize: "20px" }}
              >
                {props.text}
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
