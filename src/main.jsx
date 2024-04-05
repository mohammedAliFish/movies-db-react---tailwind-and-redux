import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { Provider } from 'react-redux';
import { store } from './redux/store/store.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
