import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import UserService from '../services/UserService'
class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                users: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.users.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`);
    }

    componentDidMount(){
        UserService.getUsers().then((res) => {
            this.setState({ users: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Employees List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Employee Name</th>
                                    <th> Employee Email</th>
                                    <th> Employee Department</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {     
                                    this.state.users.map(
                                       
                                        user => 
                                            <tr key = {user.id}>
                                            <td> { user.name} </td>   
                                            <td> {user.email}</td>
                                            <td> {user.department}</td>
                                            <td>
                                                <button onClick={ () => this.editEmployee(user.id)} className="btn btn-info">Update </button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(user.id)} className="btn btn-danger">Delete </button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(user.id)} className="btn btn-info">View </button>
                                            </td>
                                            </tr>
                                    )
                                }
                                {
                                    console.log(this.state.users)
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListUserComponent
