import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'  // <--- This must be present
import store from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
//wrap our app in browser router
<BrowserRouter>
     <Provider store={store}>
         <App />
     </Provider>
  </BrowserRouter>

)

