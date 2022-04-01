import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }
    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }
    addEmployee(){
        this.props.history.push('/add-employee/_add')
    }
    render() {
        return (
            <div>
                 <h2 className="text-center">Employees List</h2>
                 <div className = "row">
                    <button className="btn btn-secondary" onClick={this.addEmployee}> Add Employee</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th className="text-center"> Employee First Name</th>
                                    <th className="text-center"> Employee Last Name</th>
                                    <th className="text-center"> Employee Email Id</th>
                                    <th className="text-center"> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                       <tr key = {employee.id}>
                                    <td className="text-center">{employee.firstName}</td>
                                    <td className="text-center">{employee.lastName}</td>
                                    <td className="text-center">{employee.emailId}</td>
                                    <td  className="text-center">
  <button className="btn btn-primary" onClick={()=>this.editEmployee(employee.id)}> Update </button>
 <button className="btn btn-danger" onClick={()=>this.deleteEmployee(employee.id)}> Delete </button>
<button className="btn btn-success" onClick={()=>this.viewEmployee(employee.id)}> View </button>
                                    </td>
</tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListComponent






















