import React, { Component } from 'react'

import Arithmatic from './components/Arithmatic'
import Graphics from './components/Graphics'

import './App.css'

class App extends Component {
  state = {
    fields: {}
  }

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    })
    // console.log('updatedValue', updatedValue)
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>header</header>
        <main className='App-main'>
          <h5>The current state of variables the app knows about...</h5>
          <p>{JSON.stringify(this.state.fields, null, 2)}</p>
          <Arithmatic onChange={fields => this.onChange(fields)} />
          <Graphics onChange={fields => this.onChange(fields)} />
        </main>
        <footer className='App-footer'>footer</footer>
      </div>
    )
  }
}

export default App
