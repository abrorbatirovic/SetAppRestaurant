import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store from "./store/store";
import {BrowserRouter} from 'react-router-dom'
import {DatePicker} from 'antd'
import 'antd/dist/antd.css'
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <DatePicker/>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

