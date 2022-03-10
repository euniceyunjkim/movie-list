import React from 'react';

class AddMoviesBar extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      add: ''
    };
  }

  add (input) {
    this.setState({add: input.target.value});
  }

  render () {
    return (
      <div className = "add-bar">
        <input className = "add-input-form" type = "text" value={this.state.add} onChange={this.add.bind(this)}/>
        <button className= "add-button" onClick={() => this.props.addInput(this.state.add)}>
          Add Movie Title
        </button>
      </div>
    )
  }
}


export default AddMoviesBar;