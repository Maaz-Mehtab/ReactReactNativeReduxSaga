import React, { useState } from 'react';
import '../../../../App.css'
import { RegisterUserAction } from '../store/AuthAction';
import { emailRegex } from '../../../../config/app.constant'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

export default function Signup(props) {
    let history = useHistory();
    const dispatch = useDispatch()
    const userSession = useSelector(state => state.Auth.users)
    const reduxLoader = useSelector(state => state.Auth.isLoader)
    const [state, setstate] = useState({
        secureTextEntry: true,
        password: '',
        username: '',
        email: '',

    })

    const [isloader, setisloader] = useState(false)
    const [errorEmail, seterrorEmail] = useState(false)
    const [errorUser, seterrorUser] = useState(false)
    const [errorPassword, seterrorPassword] = useState(false)
    const [loginFail, setloginFail] = useState(false)
    const [errorEmailMessage, seterrorEmailMessage] = useState('')
    const [errorUserMessage, seterrorUserMessage] = useState('')
    const [errorPasswordMessage, seterrorPasswordMessage] = useState('')
    const [loginFailMessage, setloginFailMessage] = useState('')


    const onChangeState = (e) => {
        setstate({
            ...state,
            [e.target.name]: e.target.value
        });
        seterrorEmail(false);
        seterrorPassword(false);
        seterrorUser(false);

    }
    const LoginNavigate = () => {
        try {
            history.push("/Login")
        } catch (e) {
            console.log("Exception", e)
        }
    }

    const SignUpUser = () => {
        try {
            console.log("state", state);
            if (state.email.length == 0) {
                seterrorEmail(true);
                seterrorEmailMessage("Enter your Email")
                return
            }
            if (emailRegex.test(state.email) == false) {
                seterrorEmail(true);
                seterrorEmailMessage("Enter your valid Email")
                return
            }
            if (state.username.length == 0) {
                seterrorUser(true);
                seterrorUserMessage("Enter your Name")
                return
            }

            else if (state.password.length == 0) {
                seterrorPassword(true);
                seterrorPasswordMessage("Enter your Password")
                return
            }
            setisloader(true)


            let obj = {
                email: state.email.toLowerCase(),
                password: state.password,
                name: state.username
            }
            dispatch(RegisterUserAction(obj))
            if (!reduxLoader) {
                setTimeout(() => {
                    setisloader(false)
                    history.push("/")
                    //  props.navigation.navigate("Login")
                }, 5000);
            }
        }
        catch (e) {
            console.log("error", e.message)
            setisloader(false)
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
                                                name="email" value={state.Email} onChange={(e) => onChangeState(e)}
                                                id="emailAddress" type="email" required placeholder="Email Address" className="form-control pl-2" />
                                        </div>

                                        {errorEmail &&
                                            <div className=" alert-danger mt-2 ">
                                                <span >{errorEmailMessage}</span>
                                            </div>
                                        }
                                    </div>
                                    <br />

                                    <div className="form-group">
                                        <div className="input-group">

                                            <input
                                                name="username" value={state.username} onChange={(e) => onChangeState(e)}
                                                id="emailAddress" type="text" required placeholder="Your Full Name" className="form-control pl-2" />
                                        </div>

                                        {errorUser &&
                                            <div className=" alert-danger mt-2 ">
                                                <span >{errorUserMessage}</span>
                                            </div>
                                        }
                                    </div>
                                    <br />


                                    <div className="form-group">
                                        <div className="input-group">

                                            <input
                                                type="password" name="password" value={state.password} onChange={(e) => onChangeState(e)}
                                                id="Pass" required placeholder="Password" className="form-control pl-2 p-2" />
                                        </div>

                                        {errorPassword &&
                                            <div className=" alert-danger mt-2 ">
                                                <span >{errorPasswordMessage}</span>
                                            </div>
                                        }
                                    </div>

                                    {/* <a href="#" className="forget-pwd1">Forgot Password?</a> */}


                                    <div className="form-group">
                                        <button className="btn btn-lg btn-primary btn-block sign-in-btn" onClick={() => SignUpUser()}>REGISTER </button>
                                    </div>

                                    <br />
                                    <br />

                                    <p className="dnt-have-account">Already have an account?</p>

                                    <br />
                                    <div className="form-group">
                                        {/* <input name="register" className="btn btn-lg btn-primary btn-block register-btn" value="REGISTER" type="submit" /> */}

                                        <span  className="signin-btn" onClick={() => LoginNavigate()}>SIGN IN</span>

                                    </div>

                                    {/* </form> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );

}

