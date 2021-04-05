import { takeEvery, call, put } from 'redux-saga/effects'
import { setLoginUser, setLoginError ,newUserregister } from './AuthAction';
import { userData } from '../../../../userData';

function* fetchLoginUser(userobj) {
    try {
        let auth = []
        auth = userData.filter(a => a.email == userobj.payload.email && a.password == userobj.payload.password)
        console.log("auth.length",auth.length);
        if (auth.length > 0) {

            yield put(setLoginUser(auth))
        }
        else {
            yield put(setLoginError())
        }


    }
    catch (e) {
        console.log("Exception", e)
    }
}
function* fetchRegisterUser(userobj) {
    try {
        userobj.payload.id = userData.length;
        userData.push(userobj.payload)
        console.log("userData fetchRegisterUser",userData);
        yield put(newUserregister())
       


    }
    catch (e) {
        console.log("Exception", e)
    }
}


export function* waitforUserLogin() {
    yield takeEvery("LOGIN", fetchLoginUser)
    yield takeEvery("REGISTER", fetchRegisterUser)
    
}