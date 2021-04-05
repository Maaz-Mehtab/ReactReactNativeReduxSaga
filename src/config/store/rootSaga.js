import { all } from "redux-saga/effects";
import { waitforUserLogin } from "../../features/v1/Auth/store/AuthSaga";

export default function* rootSaga() {
  yield all([waitforUserLogin()]);
}