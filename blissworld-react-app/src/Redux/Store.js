import { legacy_createStore, applyMiddleware   }  from 'redux';
import myReducer from './reducer';
import cartReducer from './cartReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';


export  const store = legacy_createStore(cartReducer,
    composeWithDevTools(applyMiddleware(thunk)));