import React from 'react';

class SearchBar extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      value: ''
    };
  }

  searchChange (input) {
    this.props.searchInput(input.target.value);
    this.setState({value: input.target.value});
  }

  render () {
    return (
      <div className = "search-bar"> Movie List Search:
        <input className = "search-input-form" type ="text" value={this.state.value} onChange={this.searchChange.bind(this)}/>
      </div>
    )
  }

}


export default SearchBar;