import {combineReducers} from 'redux';
import coinsListReducer from './coinsListReducer';


const appReducer= combineReducers({
    coins : coinsListReducer,
    
});

const rootReducer = (state:any, action:any) => {
    if (action.type === 'LOGOUT') {
      state = {}
    }
  
    return appReducer(state, action)
  }
  
export default rootReducer;
