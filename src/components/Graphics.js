import React from 'react'

import config from '../config'

export default class Graphics extends React.Component {
  state = {
    apiString: null,
    apiReturn: null,
    baseURL: config.WCBASEURL,
    endPoint: 'api-graphic-png',
    a: ''
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
      this.state.baseURL + this.state.endPoint + '/?a=' + this.state.a
    this.setState({ apiString })
  }

  render () {
    // console.log('this.state.apiString', this.state.apiString)
    const graphic = this.state.apiString ? (
      <img src={this.state.apiString} alt='sin[a]' />
    ) : (
      <p>Enter a number. Get a graph of Sin()</p>
    )

    return (
      <form>
        <h4>Enter one number and click GRAPH IT:</h4>
        <input
          className='input'
          name='a'
          size='3'
          value={this.state.a}
          onChange={event => this.handleChange(event)}
        />
        <button onClick={event => this.onSubmit(event)}>GRAPH IT</button>
        <div>{graphic}</div>
      </form>
    )
  }
}
