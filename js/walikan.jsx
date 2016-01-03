import React from 'react'
import ReactDOM from 'react-dom'
import reverseWord from './util'

var Walikan = React.createClass({
  getInitialState: function() {
    return { vague: '', rvague:'' }
  },
  onInputChange: function(e) {
    let vag = e.target.value
    this.setState({ rvague: vag })
    this.setState({ vague: reverseWord(vag)})
  },
  render: function() {
     return (
      <div>
        <input onChange={ this.onInputChange }/>
        <div><h2>{ this.state.vague }</h2></div>
      </div>
    )
  }
})

ReactDOM.render( <Walikan/> , document.getElementById('kontener'))
