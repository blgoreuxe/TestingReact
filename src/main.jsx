import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './Header'
import Homebody from './Homebody'

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Header />
      <Homebody />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
