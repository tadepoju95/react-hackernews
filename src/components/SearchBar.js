import React from 'react';
import { connect } from 'react-redux'
import {  FaSearch } from "react-icons/fa";
import { fetchArticles } from '../actions';


class SearchBar extends React.Component {
	state = { displayInput: false, term: ""};

	onSubmit = e => {
		e.preventDefault();
		this.props.fetchArticles(this.state.term)
		this.setState({ term: ""}) //this is to clear out the input field after submission
	};

	renderForm () {
		return (
			<form style={{marginTop:5,marginLeft:20}} onSubmit={this.onSubmit}>
				<input
          value={this.state.term} 
          onChange={(e) => this.setState({ term: e.target.value })}
          type="search" 
          placeholder="Search" 
          aria-label="Search" 
        />
			</form>
		)
	}

	render() {
		return (
			<React.Fragment >
				<FaSearch style={{marginTop:11,marginLeft:20}} onClick={() => this.setState({ displayInput: !this.state.displayInput })} />
				{this.state.displayInput && this.renderForm()}
			</React.Fragment>
		);
	}
}

export default connect(
  null, {
    fetchArticles
  }
)(SearchBar);



