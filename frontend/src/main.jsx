import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import './bootstrap.min.css'
import store from './store.jsx'
import {Provider} from 'react-redux'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


const root= ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <App/>
  </Provider>
)