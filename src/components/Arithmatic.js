import React from 'react'
import axios from 'axios'

import config from '../config'

export default class Arthmatic extends React.Component {
  state = {
    apiReturn: '',
    result: '',
    grammar: '',
    baseURL: config.WCBASEURL,
    endPoint: 'api4',
    x: '',
    y: ''
  }

  handleChange = event => {
    this.props.onChange({ [event.target.name]: event.target.value })
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault() // this stops adding form elements to the URL
    const apiString =
      this.state.baseURL +
      this.state.endPoint +
      '/?x=' +
      this.state.x +
      '&y=' +
      this.state.y

    axios.get(apiString).then(res => {
      const apiReturn = res.data
      this.setState({ apiReturn })
    })
  }

  render () {
    console.log('this.state.apiString', this.state.apiString)
    return (
      <form>
        <h4>Enter two numbers and click CALCULATE:</h4>
        <input
          className='input'
          name='x'
          size='3'
          value={this.state.x}
          onChange={event => this.handleChange(event)}
        />
        <input
          className='input'
          name='y'
          size='3'
          value={this.state.y}
          onChange={event => this.handleChange(event)}
        />
        <button onClick={event => this.onSubmit(event)}>CALCULATE</button>
        <br />
        <h4>Result: {this.state.apiReturn.wcResult}</h4>
        <h4>Grammar: {this.state.apiReturn.wcGrammar}</h4>
      </form>
    )
  }
}
