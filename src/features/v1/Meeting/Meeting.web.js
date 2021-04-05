import React, { useState } from 'react';
import '../../../App.css'
export default function Meeting(props) {
    const [roomId, setRoomId] = useState('5f4fb41ecf1bc5003500e8c4');
    const [state, setstate] = useState({
        room: '',

    })
    const onChangeState = (e) => {
        try {
            setstate({
                ...state,
                [e.target.name]: e.target.value
            });
        }
        catch (e) {
            console.log("Exception", e)
        }
    }
    const onConnect = () => {
        // JitsiRTC.connect(roomId);
      };
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
            <div className="logout-btn">
                <button className="signout-btn">SIGN OUT</button>
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
                                                name="room" value={state.room} onChange={(e) => onChangeState(e)}
                                                id="emailAddress" type="test" required placeholder="Enter Meeting Name" className="form-control pl-2" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group text-center">
                                    <button className="btn btn-lg btn-primary btn-block sign-in-btn"
                                        style={{ width: '50%' }}
                                    onClick={() => onConnect()}
                                    > CREATE / JOIN </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}