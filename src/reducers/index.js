import { combineReducers } from 'redux';
import GifsReducer from './gifs';
import ModalReducer from './modal';
import { reducer as FormReducer } from 'redux-form';
import AuthReducer from './auth';

const rootReducer = combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  gifs: GifsReducer,
  modal: ModalReducer
});

export default rootReducer;