import { Link } from "react-router-dom";
import { useStudentContext } from "../context/StudentContext";
import StudentCard from "../components/StudentCard";

function FavouriteStudents() {
  // Access favourite list and remove function from context
  const { favouriteStudents, removeFromFavourite } = useStudentContext();

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Favourite Students</h1>
        <p className="page-subtitle">
          {favouriteStudents.length > 0
            ? `You have ${favouriteStudents.length} favourite student${
                favouriteStudents.length !== 1 ? "s" : ""
              }.`
            : "Your favourite list is empty."}
        </p>
      </div>

      {/* Conditional rendering: show cards or empty state */}
      {favouriteStudents.length > 0 ? (
        <div className="card-grid">
          {favouriteStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              actionType="remove"
              onAction={removeFromFavourite}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">📋</div>
          <h2>No favourite students added yet</h2>
          <p>Browse the student list and add some to your favourites!</p>
          <Link to="/" className="btn btn-browse">
            Browse Students
          </Link>
        </div>
      )}
    </div>
  );
}

export default FavouriteStudents;
