function StudentCard({ student, actionType, onAction }) {
  return (
    <div className={`student-card ${actionType === "remove" ? "fav-card" : ""}`}>
      <div className="card-header">
        <div className="student-avatar">
          {student.name.charAt(0)}
        </div>
        <div className="student-info-header">
          <h3 className="student-name">{student.name}</h3>
          <span className="roll-badge">{student.rollNumber}</span>
        </div>
      </div>

      <div className="card-body">
        <div className="info-row">
          <span className="info-label">📚 Course</span>
          <span className="info-value">{student.course}</span>
        </div>
        <div className="info-row">
          <span className="info-label">🎓 Year</span>
          <span className="info-value">{student.year}</span>
        </div>
      </div>

      <div className="card-footer">
        {/* Conditional rendering based on action type */}
        {actionType === "add" && (
          <button className="btn btn-add" onClick={() => onAction(student)}>
            ❤️ Add to Favourite
          </button>
        )}

        {actionType === "already" && (
          <button className="btn btn-already" disabled>
            ✅ Already Favourite
          </button>
        )}

        {actionType === "remove" && (
          <button
            className="btn btn-remove"
            onClick={() => onAction(student.id)}
          >
            ✕ Remove from Favourite
          </button>
        )}
      </div>
    </div>
  );
}

export default StudentCard;
