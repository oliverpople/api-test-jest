import React, { Component } from 'react'
import './App.css'
import { getText } from './api/twitter'

const renderLine = (text, key) => <li key={key}><b>{key}</b>: {text[key]}</li>

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { text: {} }
  }

  componentDidMount () {
    getText('text').then(data => {
      this.setState({ text: data.entity })
    })
  }

  render () {
    const { text } = this.state
    return (
      <div className='App'>
        <ul style={{ listStyle: 'none' }}>
          {
            // Loop over the object keys and render each key
            Object.keys(text).map(key => renderLine(text, key))
          }
        </ul>
      </div>
    )
  }
}

export default App
