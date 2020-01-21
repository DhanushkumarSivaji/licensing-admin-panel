import{takeEvery,takeLatest,take,call,fork,put} from 'redux-saga/effects';
import * as actions from '../actions/auth'
import * as api from '../api/auth';

function* login(action){
    try{
        const result = yield call(api.loginUser,action.payload);
        yield put(actions.loginUserSucess({
            items: result.data.token
        }))
    }catch(e){

    }
}

function* watchLoginUserRequest(){

    yield takeLatest(actions.Types.LOGIN_USER_REQUEST,login)
}

const  authSagas = [
    fork(watchLoginUserRequest)
 ];
 
 export default authSagas;