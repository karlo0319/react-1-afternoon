// const { render } = require("react-dom");

import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            names: ['Carl', 'Joe', 'Joseph', 'Caleb', 'Mariah', 'Anthony', 'Miriam', 'Christina'],
            userInput: '',
            filteredNames: []
    }
}

handleChange(val) {
    this.setState({ userInput: val });
}

filterNames(userInput) {
    let names = this.state.names;
    let updatedFilteredNames = [];

    for ( let i = 0; i < names.length; i++ ) {
      if ( names[i].includes(userInput) ) {
        updatedFilteredNames.push(names[i]);
      }
    }
    this.setState({ filteredNames: updatedFilteredNames });
  }

render() {
    return (
        <div className='puzzleBox filterStringPB'>
            <h4> Filter String </h4>
            <span className='puzzleText'> Names: {JSON.stringify(this.state.names, null, 10)} </span>
            <input className='inputLine' onChange={(e)=> this.handleChange(e.target.value)}/>
            <button className='confirmationButton' onClick={()=> this.filterNames(this.state.userInput)}> Filter </button>
            <span className='resultsBox filterStringRB'>Filtered Names: {JSON.stringify(this.state.filteredNames, null, 10)} </span>
        </div>
        )
    }
}
