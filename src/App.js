import logo from "./logo.svg";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="login">
      <div className="login_header">
        <img className="img" src={logo} />
        <h1>Login</h1>
        <p>Login you account</p>
        <p>Branches</p>
      </div>
      <div>
        <form>
          <div className="form_group">
            <div className="input_dev">
              <label>User Name</label>
              <input />
            </div>
          </div>
          <div className="form_group">
            <div className="input_dev">
              <label>User Name</label>
              <input />
            </div>
          </div>
          <div className="login_div">
            <button className="login_btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
