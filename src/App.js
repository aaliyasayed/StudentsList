import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStudents, bulkUploadStudentsRemarks, updatedStudentRemarks } from './store/students/action';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      markedStudents: []
    }

    this.selectStudents = this.selectStudents.bind(this);
    this.handleBulkUpload = this.handleBulkUpload.bind(this);
    this.selectStudents = this.selectStudents.bind(this);
  }

  componentDidMount() {
    this.props.getAllStudentsData();
  }

  selectStudents(student) {

    let students =  Array.from(this.state.markedStudents);
    const index = this.state.markedStudents.findIndex(({ id }) => id === student.id);
    if (index > -1) {
      students.splice(index, 1);
    } else {
      students.push(student);
    }

    this.setState({
      markedStudents: students
    })
  }

  handleChange(event, studentId) {
    event.target.value && this.props.updatedStudentRemarks(event.target.value, studentId);
  }

  handleBulkUpload() {
    console.log(this.state.markedStudents);
    this.props.bulkUploadStudentsRemarks(this.state.markedStudents);
  }

  render() {
    const { students } = this.props.studentsList;

    return (
      <div className="App">
        <table>
          <tbody>
            <tr>
              <td style={{width: '80px'}}>ID</td>
              <td style={{width: '80px'}}>Name</td>
              <td>Remarks</td>
            </tr>
            {
              students && students.map((student, key) =>
                <tr key={key}>
                  <td><input type="checkbox" onChange={() => this.selectStudents(student)} /> {student.id}</td>
                  <td>{student.name}</td>
                  <td>
                    <textarea value={student.remarks} onChange={($event) => this.handleChange($event, student.id)}></textarea>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>

        <button onClick={this.handleBulkUpload}>Bulk Upload</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  studentsList: state.Students
});

const mapDispatchToProps = (dispatch) => ({
  getAllStudentsData: () => dispatch(fetchStudents()),
  bulkUploadStudentsRemarks: () => dispatch(bulkUploadStudentsRemarks()),
  updatedStudentRemarks: (remarks, stdId) => dispatch(updatedStudentRemarks(remarks, stdId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
