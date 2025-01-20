import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            email: '',
            name: '',
            age: '',
            department: '',
            salary: '',
            role: '',
        };

        this.changeHandler = this.changeHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({
                email: employee.email,
                name: employee.name,
                age: employee.age,
                department: employee.department,
                salary: employee.salary,
                role: employee.role,
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {
            email: this.state.email,
            name: this.state.name,
            age: this.state.age,
            department: this.state.department,
            salary: this.state.salary,
            role: this.state.role,
        };
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
            this.props.history.push('/employees');
        });
    };

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    cancel() {
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input
                                            placeholder="Email"
                                            name="email"
                                            className="form-control"
                                            value={this.state.email}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input
                                            placeholder="Name"
                                            name="name"
                                            className="form-control"
                                            value={this.state.name}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Age:</label>
                                        <input
                                            type="number"
                                            placeholder="Age"
                                            name="age"
                                            className="form-control"
                                            value={this.state.age}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Department:</label>
                                        <input
                                            placeholder="Department"
                                            name="department"
                                            className="form-control"
                                            value={this.state.department}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Salary:</label>
                                        <input
                                            type="number"
                                            placeholder="Salary"
                                            name="salary"
                                            className="form-control"
                                            value={this.state.salary}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Role:</label>
                                        <input
                                            placeholder="Role"
                                            name="role"
                                            className="form-control"
                                            value={this.state.role}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateEmployee}>
                                        Save
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={this.cancel.bind(this)}
                                        style={{ marginLeft: '10px' }}
                                    >
                                        Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateEmployeeComponent;
