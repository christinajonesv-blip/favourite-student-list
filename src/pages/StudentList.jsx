import students from "../data/students";
import { useStudents } from "../context/StudentContext";

function StudentList() {
  const { favourites, addFavourite } = useStudents();

  return (
    <div className="page-container">
      <h2>List of Students</h2>

      <div className="student-list">
        {students.map((student, index) => {
          const isFavourite = favourites.some(
            (item) => item.id === student.id
          );

          return (
            <div className="student-card" key={student.id}>
              <div className="student-info">
                <span>
                  {index + 1}. {student.name}
                </span>

                <small>Roll No: {student.rollNo}</small>
              </div>

              <button
                className="add-button"
                onClick={() => addFavourite(student)}
                disabled={isFavourite}
              >
                {isFavourite
                  ? "Added to Favourite"
                  : "Add to Favourite"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StudentList;
