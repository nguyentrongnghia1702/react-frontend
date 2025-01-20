import React, { Component } from 'react'
// import EmployeeService from '../services/EmployeeService'
import UserService from '../services/UserService'
class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then( res => {
            this.setState({user: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee Name: </label>
                            <div style={{ marginLeft: '5px' }}> { this.state.user.name }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Email: </label>
                            <div style={{ marginLeft: '5px' }}> { this.state.user.email }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Age: </label>
                            <div style={{ marginLeft: '5px' }}> { this.state.user.age }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Department: </label>
                            <div style={{ marginLeft: '5px' }}> { this.state.user.department }</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
