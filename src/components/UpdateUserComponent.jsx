import React, { Component } from 'react'
import UserService from '../services/UserService';


class UpdateUserComponent extends Component {
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
            password: '',
            session_role: localStorage.getItem('user-role'),
        };
    }

    componentDidMount() {
        if (this.state.id !== '_add') {
            UserService.getUserById(this.state.id).then((res) => {
                let employee = res.data;
                this.setState({
                    email: employee.email,
                    name: employee.name,
                    age: employee.age,
                    department: employee.department,
                    salary: employee.salary,
                    role: employee.role,
                    password: employee.password,
                });
            });
        }
    }

    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        const employee = {
            email: this.state.email,
            name: this.state.name,
            age: this.state.age,
            department: this.state.department,
            salary: this.state.salary,
            role: this.state.role,
        };

        
        UserService.updateUser(employee, this.state.id).then(() => {
            if (this.state.session_role === 'User') {
                this.props.history.push(`/view-employee/${this.state.id}`);
            }else{   
                this.props.history.push('/employees');
            }
        });
        
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    cancel = () => {
        console.log(this.state.role);
        if (this.state.role === 'User') {
            this.props.history.push(`/view-employee/${this.state.id}`);
        }else{
            this.props.history.push('/employees');
        }
    };

    getTitle = () => {
        return (
            <h3 className="text-center">
                {this.state.id === '_add' ? 'Add Employee' : 'Update Employee'}
            </h3>
        );
    };

    render() {
        return (
            <div  style={{ marginBottom: '50px' }}>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {this.getTitle()}
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input
                                            placeholder="Email"
                                            name="email"
                                            className="form-control"
                                            value={this.state.email}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input
                                            placeholder="Name"
                                            name="name"
                                            className="form-control"
                                            value={this.state.name}
                                            onChange={this.handleInputChange}
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
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Department:</label>
                                        <input
                                            placeholder="Department"
                                            name="department"
                                            className="form-control"
                                            value={this.state.department}
                                            onChange={this.handleInputChange}
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
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Role:</label>
                                        <input
                                            placeholder="Role"
                                            name="role"
                                            className="form-control"
                                            value={this.state.role}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password:</label>
                                        <input
                                            placeholder="password"
                                            name="password"
                                            className="form-control"
                                            value={this.state.password}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <button
                                        className="btn btn-success"
                                        onClick={this.saveOrUpdateEmployee}
                                    >
                                        Save
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={this.cancel}
                                        style={{ marginLeft: '10px' }}
                                    >
                                        Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default UpdateUserComponent;

