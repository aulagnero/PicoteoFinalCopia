import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Apps from './Apss.tsx'
import { store } from './Redux/store.ts'




ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <Provider store={store}>
      
        <BrowserRouter>
          <Apps />
        </BrowserRouter>
      
    </Provider>

  </React.StrictMode>,
)
