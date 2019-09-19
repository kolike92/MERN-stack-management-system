import {combineReducers} from 'redux';
import users from './users';
import userDetails from'./userDetails';

const reducer = combineReducers({
    users,
    userDetails
})

export default reducer;
