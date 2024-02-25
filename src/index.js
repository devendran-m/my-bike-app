import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Bike from './Bike';
import MyList from './MyList';
import Numbers from './Numbers';
import reportWebVitals from './reportWebVitals';

const items = [
  {id:0, name:"Alice"},
  {id:1, name:"Bob"},
  {id:2, name:"Charlie"},
  {id:3, name:"Don"},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Bike/>
    <MyList items={items}/>
    <Numbers number={12}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
