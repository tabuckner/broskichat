import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    // Create the `state` of each form (value)
    this.state = {
      fullName: '',
      email: '',
      username: '',
      password: '',
      password2: '', // For user to verify password
      gender: 'male' // Can change default
    };

    // Bind `this` to each method below
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  // Handles how to determine the event target value
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  // Process all input form elements
  processInputForms() {
    // Input form items
    const inputElements = [
      { name: 'fullName', value: this.state.fullName, label: 'Full Name', type: 'text', placeholder: 'Please enter full name' },
      { name: 'email', value: this.state.email, label: 'Email', type: 'email', placeholder: 'Please enter a valid email' },
      { name: 'username', value: this.state.username, label: 'Username', type: 'text', placeholder: 'Please enter a valid username' },
      { name: 'password', value: this.state.password, label: 'Password', type: 'password', placeholder: 'Please enter a valid password' },
      { name: 'password2', value: this.state.password2, label: 'Verify Password', type: 'password', placeholder: 'Please match the password' },
      // { name: 'password2', value: this.state.password2, label: 'Verify Password', type: 'password', placeholder: 'Please match the password' } @NOTE - Add more objects like this
    ].map((item, index) => {
      // Return each element w/ key
      return <label className='label has-text-weight-light' key={ index }>
                { item.label }
                <input
                  className='input'
                  placeholder={ item.placeholder }
                  name={ item.name }
                  type={ item.type }
                  value={ item.value }
                  onChange={ this.handleInputChange } />
              </label>;
    });
    // Return to process each element item
    return inputElements;
  }

  // Process all dropdown elements
  processDropdownItems() {
    // Input dropdown elements
    const dropdownElements = [
      { name: 'gender', value: this.state.gender, label: 'Gender', multiple: false },
      // { name: 'gender', value: this.state.gender, label: 'Gender', multiple: false } @NOTE - Add more objects like this
    ].map((item, index) => {
      // Return each element w/ key
      return <label className='label' key={ index }>
                { item.label }
                <div className='control'>
                  <span className='select'>
                    <select multiple={ item.multiple } name= { item.name } value={ item.value } onChange={ this.handleInputChange }>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                    </select>
                  </span>
                </div>
              </label>;
    });
    // Return to process each element item
    return dropdownElements;
  }

  // Handles when form is submitted
  handleSubmit(event) {
    console.log(`A name was submitted: ${ this.state.fullName }`);
    console.log(`An email was submitted: ${ this.state.email }`);
    console.log(`A username was submitted: ${ this.state.username }`);
    console.log(`A password was submitted: ${ this.state.password }`);
    console.log(`A match password was submitted: ${ this.state.password2 }`);
    console.log(`A gender was submitted: ${ this.state.gender }`);
    event.preventDefault();
  }

  // Style the horizontal line (This may be moved to shared);
  hrStyle() {
    const style1 = {
      'border': 0,
      'height': '1px',
      'backgroundImage': 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 2555, 0.75), rgba(255, 255, 255, 0))'
    };
    return <hr style={style1} />;
  }

  // Render the component
  render() {
    return(
      <section className="register">
        <div className="hero is-fullheight is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-6">
                  <div className="box is-light">
                      <div className="field">
                        <h1 className="title"> Register Form </h1>
                        { this.hrStyle() }
                        <form onSubmit={ this.handleSubmit }>
                          {/* Execute the methods to create form elements */}
                          { this.processInputForms() }
                          { this.processDropdownItems() }

                          { this.hrStyle() }
                          <input className="button is-inverted is-dark is-fullwidth is-outlined" type="submit" value="Register" />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    );
  }
}

export default Register;
