import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import Apps from './Apss.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Apps/>
      
      </BrowserRouter>
    </Provider>

  </React.StrictMode>,
)
