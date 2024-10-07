/**
 * Updates student grades for a specific city.
 *
 * @param {Array} students - Array of student objects.
 * @param {String} city - The city to filter students by.
 * @param {Array} newGrades - Array of grade objects.
 * @returns {Array} - Array of updated student objects.
 */
function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find(
        (grade) => grade.studentId === student.id
      );

      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: gradeObj ? gradeObj.grade : "N/A",
      };
    });
}

export default updateStudentGradeByCity;
