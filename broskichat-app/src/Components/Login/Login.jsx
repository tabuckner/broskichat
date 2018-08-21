import React, { Component } from 'react';
import BInput from '../Shared/BInput';

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  onChangeHandler = (event) => {
    event.preventDefault();
    const value = event.target.value;
    if (event.target.id === 'email') {
      this.setState({ email: value });
    } else if (event.target.id === 'password') {
      this.setState({ password: value });
    }
  }

  onSubmitHandler = () => {
    console.log(this.state);
  }

  render() {
    return (
      <section className="login">
        <div className="hero is-fullheight is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-6">
                  <div className="box is-light">
                    <form>
                      <h1 className="title has-text-centered has-text-weight-light">Welcome</h1>
                      <BInput
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={this.state.email}
                        handleChange={this.onChangeHandler} />
                      <BInput
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        handleChange={this.onChangeHandler} />
                      <button onClick={this.onSubmitHandler} className="button is-inverted is-dark is-fullwidth is-outlined">Log In</button>
                    </form>
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

export default Login;