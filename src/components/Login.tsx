import React, { useState, useRef, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import Typed from "typed.js";


const Login = () => {

  const [signInStatus, setSignInStatus] = useState(false);
  const el = useRef<HTMLSpanElement>(null);
  let nav = useNavigate();

  useEffect(() => {
    const type = new Typed(el.current, {
      strings: ["Selamat Datang", "Build with React.js"],
      typeSpeed: 120,
      backSpeed: 50,
      startDelay: 500,
      backDelay: 375,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
      smartBackspace: true,


    })

    return () => {
      type.destroy()
    }
  }, [])
  const gResSuccess = res => {
    alert("Login Sukses");
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

        <div className="" style={{
          overflow: "hidden",
        }}>
          <div className="row">
            <div className="col-7" style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1580628119872-27a3716cfa9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              overflow: "hidden",
              height: "100vh",

            }}>
              <h3 className="ms-2 mt-3">WSConsume</h3>
              <span className="ms-2" style={{
                fontSize: "65px",
                fontWeight: "bold",
                padding: "3px"
              }} ref={el}></span>
              <h5 className="mb-auto text-center" style={{
                marginTop: "10px",
                position: "absolute",
                bottom: "15px",
                left: "0",
                marginLeft: "30px",

              }}>{`© ${new Date().getFullYear().toString()} - created with luv ❤ by itsmerifz`}</h5>
            </div>
            <div className="col-5">
              <div className="vh-100 d-flex justify-content-center align-items-center text-center fw-normal" style={{
                backgroundColor: "#3F474F",
              }}>
                <div>
                  <h3 className="mb-5">Login Page</h3>

                  <GoogleLogin
                    clientId="867196689924-emg1kjqutmtrrp63m36k9k7rt5rpjt2r.apps.googleusercontent.com"
                    onSuccess={gResSuccess}
                    onFailure={gResFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    render={renderProps => (
                      <button onClick={renderProps.onClick} className="btn btn-outline-light fw-bold" style={{
                        width: "175px",
                        height: "50px"
                      }}>Start with Google</button>
                    )}
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
    }
    </>
  )
}

export default Login;