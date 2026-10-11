import { useStudents } from "../context/StudentContext";

function FavouriteStudents() {
  const { favourites, removeFavourite } = useStudents();

  return (
    <div className="page-container">
      <h2>Favourite Students</h2>

      {favourites.length === 0 ? (
        <p className="empty-message">
          No favourite students added yet.
        </p>
      ) : (
        <div className="student-list">
          {favourites.map((student, index) => (
            <div className="student-card" key={student.id}>
              <div className="student-info">
                <span>
                  {index + 1}. {student.name}
                </span>

                <small>Roll No: {student.rollNo}</small>
              </div>

              <button
                className="remove-button"
                onClick={() => removeFavourite(student.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavouriteStudents;
