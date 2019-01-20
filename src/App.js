import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import FilePreview from './pages/FilePreview'

import './stylesheets/application.css'

class App extends Component {
  render = () => (
    <Router>
      <div className="container">
        <Route exact path="/file-preview" component={FilePreview} />
      </div>
    </Router>
  )
}

export default App
