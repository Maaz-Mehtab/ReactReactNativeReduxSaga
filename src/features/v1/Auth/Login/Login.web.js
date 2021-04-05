import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { userData } from '../../../../userData';
import '../../../../App.css'
// import { useHistory } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { emailRegex } from '../../../../config/app.constant'
import { LoginUserAction } from '../store/AuthAction';
// var history = useHistory();



export default function Login(props) {
    let history = useHistory();
    const dispatch = useDispatch()
    const userSession = useSelector(state => state.Auth.users)
    const reduxLoader = useSelector(state => state.Auth.isLoader)
    console.log("userSession",userSession);

    const [state, setstate] = useState({
        secureTextEntry: true,
        password: '',
        username: '',
    })
    const [loginFail, setloginFail] = useState(false)
    const [loginFailMessage, setloginFailMessage] = useState('')
    const [errorEmail, seterrorEmail] = useState(false)
    const [isloader, setisloader] = useState(false)
    const [errorPassword, seterrorPassword] = useState(false)
    const [errorPasswordMessage, seterrorPasswordMessage] = useState('')
    const [errorEmailMessage, seterrorEmailMessage] = useState('')

    const onChangeText = (event, value) => {
        setstate({
            ...state,
            [event]: value,
        });

    }

    const onChangeState = (e) => {
        setstate({
            ...state,
            [e.target.name]: e.target.value
        });

        seterrorEmail(false);
        seterrorPassword(false);

    }


    const LoginUser = () => {
        try {
            if (state.username.length == 0) {
                seterrorEmail(true);
                seterrorEmailMessage("Enter your Email")
                return
            }
            if (emailRegex.test(state.username) == false) {
                seterrorEmail(true);
                seterrorEmailMessage("Enter your valid Email")
                return
            }
            else if (state.password.length == 0) {
                seterrorPassword(true);
                seterrorPasswordMessage("Enter your Password")
                return
            }
            setisloader(true)
            let obj = {
                email: state.username.toLowerCase(),
                password: state.password
            }
            dispatch(LoginUserAction(obj))
            if (!reduxLoader) {
                setisloader(false)
            }
            if (Object.keys(userSession).length) {
                console.log("Done Login")
                localStorage.setItem("userData",JSON.stringify(userSession))
                // AsyncStorage.setItem("userData", JSON.stringify(userSession));
                // props.navigation.navigate("Home")
            }
            else {
                seterrorPassword(true)
                seterrorPasswordMessage("Invald Email/Password")
                setTimeout(() => {
                    seterrorPassword(false)
                    seterrorPasswordMessage("")

                }, 5000);
            }
        }
        catch (e) {
            console.log("error", e.message)
            setisloader(false)
        }
    }

  const registrationNavigate = () => {
        try {
            history.push("/Signup")
        }
        catch (e) {
            console.log("Exception", e)
        }
    }

    return (


        <div style={{ backgroundColor: '#fff', height: '100%' }}>
            <div className="container-fluid green">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="heading">
                            <h1>Your <b>LOGO</b> here</h1>
                            <p>Use your Email Address and <br /> Password to Sign in</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="text-center">

                                    <div className="form-group">
                                        <div className="input-group">

                                            <input
                                                name="username" value={state.username} onChange={(e) => onChangeState(e)}
                                                id="emailAddress" type="email" required placeholder="Email Address" className="form-control pl-2" />

                                        </div>

                                    </div>
                                    {errorEmail &&
                                        <div className=" alert-danger mt-2 ">
                                            <span >{errorEmailMessage}</span>
                                        </div>
                                    }
                                    <br />


                                    <div className="form-group">
                                        <div className="input-group">

                                            <input
                                                type="password" name="password" value={state.password}
                                                onChange={(e) => onChangeState(e)}
                                                id="Pass" required placeholder="Password" className="form-control pl-2" />

                                        </div>

                                        {errorPassword &&
                                            <div className=" alert-danger mt-2 ">
                                                <span >{errorPasswordMessage}</span>
                                            </div>
                                        }

                                    </div>
                                    <br />
                                    <a href="#" className="forget-pwd1">Forgot Password?</a>


                                    <div className="form-group">
                                        <button className="btn btn-lg btn-primary btn-block sign-in-btn" onClick={() => LoginUser()}>SIGN IN </button>
                                    </div>

                                    <br />
                                    <br />

                                    <p className="dnt-have-account">Don't have an account?</p>


                                    <br />
                                    <div className="form-group">
                                      
                                        <button className="btn btn-lg btn-primary btn-block register-btn" onClick={() => registrationNavigate()}>REGISTER</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


