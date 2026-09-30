import { useStudentContext } from "../context/StudentContext";
import StudentCard from "../components/StudentCard";

function StudentList() {
  // Access student data and context functions via useContext
  const { students, addToFavourite, isFavourite } = useStudentContext();

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">All Students</h1>
        <p className="page-subtitle">
          Select students to add them to your favourites.
        </p>
      </div>

      {/* Dynamic rendering using .map() */}
      <div className="card-grid">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            actionType={isFavourite(student.id) ? "already" : "add"}
            onAction={addToFavourite}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentList;
