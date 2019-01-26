import React, { Component } from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
    handleSubmit(event) {
    //alert('Welcome and Greetings, ' + this.state.value);
    event.preventDefault();
    if(!/[^a-zA-Z] + /.test(this.state.value)) {
      this.setState({nameAvailable:true})
  }
  else
  {
    this.state.setValid(false);
  }
    }
  render() {
    let returnArray = []
    if(!this.state.nameAvailable) {
      returnArray.push(
      <form onSubmit={this.handleSubmit} key = "main">
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
    if(!this.state.isValid)
    returnArray.push(
      <p key = "error" class = "errorText"> Please use a character a-z or A-Z!</p>
    );
    return returnArray;
  }else {
    return (<div> Greetings, salutations, and welcomings,   {this.state.value}</div>);
  }
  }
}
