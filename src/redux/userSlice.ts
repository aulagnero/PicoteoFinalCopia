import { combineReducers } from 'redux';
import authReducer from './action/AutentificacionReducer';

const rootReducer = combineReducers({
    auth: authReducer
    // otros reducers van aquí
});

export default rootReducer;

