import { Link } from "react-router-dom";
import React from "react";
import Logout from "./Logout.tsx";

export default class Nav extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-primary h-100 p-3">
        <div className="container-fluid">
          <span className="fw-bold fs-3">WS Consume</span>
          <div className="collapse navbar-collapse" id="navbar">
            <div className="navbar-nav ms-auto">
              <p className="m-auto me-4 fs-6">{`Halo, ${localStorage.getItem("nama")}!`}</p>
              <Logout />
            </div>
          </div>
        </div>
      </nav>
    )
  }
}