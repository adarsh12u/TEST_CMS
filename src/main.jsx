import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context from './components/context/Context.jsx'
import store from './store/store.js'
import {  ToastContainer } from 'react-toastify'
import { persiststores } from './store/store.js'
import 'react-toastify/dist/ReactToastify.css';

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persiststores}>

  <Provider store={store}>
 <Context >
    <App />
    
   <ToastContainer  position="top-right" />
  </Context>
  </Provider>
  </PersistGate>,



  
)
