import React, { Component } from 'react'
import UserService from '../services/UserService';
import { useAuth } from '../App'; // Adjust the path to where `useAuth` is defined.

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      }
    
      handleSubmit(event) {
        event.preventDefault();
        let loginUser = {username: this.state.username, password: this.state.password};
        console.log("Login submitted with:", this.state);
        UserService.login(loginUser).then( res => {
              console.log("Login response:", res);
              if (res.data.status == "ok" && res.data.role == "Admin"){
                  console.log("Login successful");
                  localStorage.setItem('user-role', res.data.role);
                  this.props.history.push('/employees');
              }else if (res.data.status == "ok" && res.data.role == "User"){
                console.log("Login successful");
                localStorage.setItem('user-role', res.data.role);
                this.props.history.push(`/view-employee/${res.data.id}`);
              } 
              else{
                  console.log("Login failed");
              }
                  // this.props.history.push('/employees');
          });
      }

    render() {
        return (
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header text-center">
                    <h3>Login</h3>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.handleSubmit} >
                      {/* username Input */}
                      <div className="mb-3">
                        <label  className="form-label">
                          Username
                        </label>
                        <input
                          type="username"
                          className="form-control"
                          id="username"
                          name="username"
                          placeholder="Enter your username"
                          value={this.state.username}
                          onChange={this.handleInputChange}
                          required
                        />
                      </div>
    
                      {/* Password Input */}
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          placeholder="Enter your password"
                          value={this.state.password}
                          onChange={this.handleInputChange}
                          required
                        />
                      </div>
    
                      {/* Submit Button */}
                      <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-center">
                    <small>
                      <a href="/forgot-password" className="text-decoration-none">
                        Forgot Password?
                      </a>
                      <span className="mx-2">|</span>
                      <a href="/sign-up" className="text-decoration-none">
                        Sign Up
                      </a>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
}
export default LoginComponent