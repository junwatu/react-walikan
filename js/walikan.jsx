import React from 'react'
import ReactDOM from 'react-dom'

var Walikan = React.createClass({
  getInitialState: function() {
    return { vague: '', rvague:'' }
  },
  onInputChange: function(e) {
    let vag = e.target.value

    this.setState({ rvague: vag })

    let gav = vag.split("").reverse().join("").split(" ").reverse().join(" ")
    let gavl = gav.toLowerCase()
    let gavlfu = gavl.charAt(0).toUpperCase() + gavl.slice(1)
    this.setState({ vague: gavlfu})
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
