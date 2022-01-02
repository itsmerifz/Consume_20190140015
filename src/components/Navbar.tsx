import { Link } from "react-router-dom";
import React from "react";
import Logout from "./Logout.tsx";

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-primary h-100 p-3">
        <div className="container-fluid">
          <span className="fw-bold fs-3">WS Consume</span>
          <div className="collapse navbar-collapse" id="navbar">
            <div className="navbar-nav ms-auto">
              <div className="d-flex">
                <img src={localStorage.getItem("foto")} alt={localStorage.getItem("nama")} className="me-3 rounded-circle" style={{
                  width: "50px",
                  height: "50px"
                }} />
                <p className="m-auto me-4 fs-6 fw-bolder">{`Halo, ${localStorage.getItem("nama")}!`}</p>
              </div>
              <Logout />
            </div>
          </div>
        </div>
      </nav>
    )
  }
}