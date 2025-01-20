import React, { Component } from 'react';
// import EmployeeService from '../services/EmployeeService';
import UserService from '../services/UserService';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            user: {}
        };

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleCheckAttendance = this.handleCheckAttendance.bind(this);
        this.handleCalculateTotalSalary = this.handleCalculateTotalSalary.bind(this);
    }

    componentDidMount() {
        UserService.getUserById(this.state.id).then(res => {
            this.setState({ user: res.data });
        });
    }

    handleUpdate() {
        // Logic for updating user information
        console.log("Update information clicked for user ID:", this.state.id);
        // You can redirect to an update page or open a form modal
        this.props.history.push(`/update-employee/${this.state.id}`);
    }

    handleCheckAttendance() {
        // Logic for checking attendance
        UserService.checkAttendance(this.state.id).then(res => {
            console.log("Login response:", res);
            this.setState({ user: res.data });
        });
    }

    handleCalculateTotalSalary() {
        const { salary, workDays } = this.state.user;
        if (salary && workDays) {
            const totalSalary = salary * workDays;
            console.log(`Total Salary: ${totalSalary}`);
            alert(`Total Salary: ${totalSalary}$`);
        } else {
            console.log("Salary or work days data is missing.");
            alert("Salary or work days data is missing.");
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Employee Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Employee Name: </label>
                            <div style={{ marginLeft: '5px' }}> {this.state.user.name}</div>
                        </div>
                        <div className="row">
                            <label> Employee Email: </label>
                            <div style={{ marginLeft: '5px' }}> {this.state.user.email}</div>
                        </div>
                        <div className="row">
                            <label> Employee Age: </label>
                            <div style={{ marginLeft: '5px' }}> {this.state.user.age}</div>
                        </div>
                        <div className="row">
                            <label> Employee Department: </label>
                            <div style={{ marginLeft: '5px' }}> {this.state.user.department}</div>
                        </div>
                        <div className="row">
                            <label> Employee Salary: </label>
                            <div style={{ marginLeft: '5px' }}> {this.state.user.salary}</div>
                        </div>
                        <div className="row">
                            <label> Employee WorkDays: </label>
                            <div style={{ marginLeft: '5px' }}> {this.state.user.workDays}</div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={this.handleUpdate}
                    >
                        Update Information
                    </button>

                    <button 
                        className="btn btn-secondary me-2"
                        onClick={this.handleCheckAttendance}
                    >
                        Check Attendance
                    </button>

                    <button 
                        className="btn btn-success"
                        onClick={this.handleCalculateTotalSalary}
                    >
                        Calculate Total Salary
                    </button>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;
