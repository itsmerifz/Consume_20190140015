import React from "react";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";

const clientId = "867196689924-r3sv8ovkd2b9n6qo5acv6h4dmreeh1tp.apps.googleusercontent.com";

export default function Logout() {
  const nav = useNavigate();

  const onSuccess = () => {
    alert("Logout Sukses!");
    nav("/");
    localStorage.removeItem("googleId");
    localStorage.removeItem("nama");
    localStorage.removeItem("foto");
  }

  return (
    <>
      <GoogleLogout
        clientId={clientId}
        render={renderProps => (
          <button onClick={renderProps.onClick} className="btn btn-outline-light fw-bold" style={{
            width: "100px",
            height: "50px"
          }}>Log Out</button>
        )}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}>
      </GoogleLogout>
    </>
  )
}