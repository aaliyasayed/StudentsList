export const fetchStudents = () => async (dispatch) => {

  try {
    const response = await fetch('http://www.mocky.io/v2/5e94a1c63100000fbd5e3374');
    const data = await response.json();

    dispatch({ type: 'FETCHING_STUDENT_DATA' });
    dispatch({
      payload: data, // response from API
      type: 'SUCCESS_STUDENT_DATA'
    });
  } catch (err) {
    dispatch({
      payload: err.message,
      type: 'ERROR_STUDENT_DATA'
    });
    console.error(err.message);
  }
};

export const updatedStudentRemarks = (remark, stdId) => (dispatch, getState) => {

  const students = getState().Students.students;

  const index = students.findIndex(({ id }) => id === stdId);
  if (index > -1) {
    const stud = students[index];
    stud.remarks = remark;

    const newStudentList = Array.from(students);
    newStudentList[index] = stud;

    dispatch({
      payload: newStudentList,
      type: 'UPDATING_REMARKS'
    })
  }

};

export const bulkUploadStudentsRemarks = (updatedStudentData) => (dispatch, getState) => {
  const students = getState().Students.students;

  try {
    dispatch({ type: 'UPLOADING_STUDENT_DATA' });
    dispatch({
      payload: students, // response from API
      type: 'SUCCESS_UPLOADING_STUDENT_DATA'
    });
  } catch (err) {
    dispatch({
      payload: err.message,
      type: 'ERROR_UPLOADING_STUDENT_DATA'
    });
    console.error(err.message);
  }
}