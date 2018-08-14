import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    // Create the `state` of each form (value)
    this.state = {
      fullName: '',
      email: ''
    };

    // Bind `this` to each method below
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Handles all changes on each form
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  // Handles when form is submitted
  handleSubmit(event) {
    console.log(`A name was submitted: ${ this.state.fullName }`);
    console.log(`A name was submitted: ${ this.state.email }`);
    event.preventDefault();
  }

  // Add a method that will produce all the forms

  render() {
    return(
      <div className="container">
        <div className="column">
          <div className="field">
            <form onSubmit={ this.handleSubmit }>
              <label className="label">
                Full Name:
                <input 
                  className="input"
                  name="fullName"
                  type="text"
                  value={ this.state.fullName }
                  onChange={ this.handleInputChange } />
              </label>
              <label className="label">
                Email:
                <input
                  className="input"
                  name="email"
                  type="text"
                  value={ this.state.email }
                  onChange={ this.handleInputChange } />
              </label>
              <input className="button is-primary" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
