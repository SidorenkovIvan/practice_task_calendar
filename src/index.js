import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
* TODO:
- use one code style(tabs, imports)
- to add linter on the project
- not for all buttons are pointers
- to check view for other devices, responsive.
- сохранение календаря в localStorage
- fix all styles by example
- try to use semantic tags
- use better camelCase for names of classes in css
* call folders in one style from capital for example
*
* */

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
