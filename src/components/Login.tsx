import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const [signInStatus, setSignInStatus] = useState(false);
  let nav = useNavigate();

  const gResSuccess = res => {
    alert("Login Sukses");
    console.log(res.profileObj);
    localStorage.setItem("nama", res.profileObj.name);
    localStorage.setItem("googleId", res.profileObj.googleId);
    localStorage.setItem("foto", res.profileObj.imageUrl);
    setSignInStatus(true);
  }

  const gResFailure = err => {
    alert("Login Gagal");
    console.log(err);
  }
  
  return (
    <>{
      signInStatus ?
      
      nav("/list")
      
      :
      
      <div className="container">
        <div className="row my-5">
          <div className="col-12 text-center">
            <h3>Login Page</h3>
            <p className="fw-normal">Selamat datang di web data karyawan <br /> silahkan login terlebih dahulu</p>
            
            <GoogleLogin
              clientId="867196689924-emg1kjqutmtrrp63m36k9k7rt5rpjt2r.apps.googleusercontent.com"
              onSuccess={gResSuccess}
              onFailure={gResFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true} 
            />
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default Login;