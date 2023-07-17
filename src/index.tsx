import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider as Chakra } from '@chakra-ui/react'

ReactDOM.render(
  <React.StrictMode>
    <Chakra>
      <Router>
        <App />
      </Router>
    </Chakra>
  </React.StrictMode>,
  document.getElementById('root')
)

// Hot Module Replacement (HMR)
if (import.meta.hot) {
  import.meta.hot.accept()
}
