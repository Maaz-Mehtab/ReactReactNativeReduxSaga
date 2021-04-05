import { combineReducers } from "redux";

import AuthReducer from '../../features/v1/Auth/store/AuthReducer';

const rootReducer = combineReducers({
  Auth: AuthReducer,
});

export default rootReducer;