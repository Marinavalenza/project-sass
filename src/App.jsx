import { useState } from "react";
import Button from "./assets/components";
import "./App.css";
import "./App.scss";

function App() {
  const [isButtonXl, setIsButtonXl] = useState(false);
  const toggleButtonXl = () => {
    setIsButtonXl(!isButtonXl);
  };
  return (
    <>
      <div onClick={() => toggleButtonXl()}>
        <Button label="go to" icon iconLeft size="sm" square />
      </div>
      <div>
        <Button label="go to" icon outline size="md" />
      </div>
      {isButtonXl && (
        <div>
          <Button label="go to" outline size="xl" />
        </div>
      )}

      <InputToggle />
      {/* <div className="container">
        <div className="row-g">
          <div className="col1">col1</div>
          <div className="col1">col1</div>
          <div className="col1">col1</div>
          <div className="col1">col1</div>
          <div className="col1">col1</div>
          <div className="col1">col1</div>
          <div className="col1">col1</div>
          <div className="col1">col1</div>
          <div className="col1">col1</div>
          <div className="col1">col1</div>
          <div className="col1">col1</div>
          <div className="col1">col1</div>
        </div>
        <div className="row-g">
          <div className="col2">col2</div>
          <div className="col2">col2</div>
          <div className="col2">col2</div>
          <div className="col2">col2</div>
          <div className="col2">col2</div>
          <div className="col2">col2</div>
        </div>
        <div className="row-g">
          <div className="col3">col3</div>
          <div className="col3">col3</div>
          <div className="col3">col3</div>
          <div className="col3">col3</div>
        </div>
        <div className="row-g">
          <div className="col4">col4</div>
          <div className="col4">col4</div>
          <div className="col4">col4</div>
        </div>
        <div className="row-g">
          <div className="col5">col5</div>
          <div className="col7">col7</div>
        </div>
        <div className="row">
          <div className="col12">col12</div>
        </div>
        <div className="row">
          <div className="col-s1">col-s1</div>
        </div>
        <hr />
        <hr />
        <hr />
        <hr />
        <div className="row-g">
          <div className="col-s6 col-m2 col-l4">A</div>
          <div className="col-s6 col-m6 col-l4">B</div>
          <div className="col-s12 col-m4 col-l4">C</div>
        </div>
        <div className="row-g">
          <div className="col-g1">A</div>
          <div className="col-g1">B</div>
        </div>
      </div> */}
    </>
  );
}

export default App;
