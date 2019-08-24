import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {reducers} from './components/reducers';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(ReduxThunk))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root'));

