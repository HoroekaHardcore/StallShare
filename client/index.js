import React from 'react'
import ReactDOM from 'react-dom'
import 'typeface-roboto';

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
})
