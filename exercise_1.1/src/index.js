import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let counter = 1
ReactDOM.render(
  <React.StrictMode>
    <App counter = {counter} />
  </React.StrictMode>,
  document.getElementById('root')
);

/*
const refresh = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App counter={counter} />
  )
}

setInterval(() => {
  refresh()
  counter += 1
}, 1000)
*/