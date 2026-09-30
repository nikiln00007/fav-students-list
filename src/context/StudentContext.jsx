import { createContext, useContext, useState } from "react";

// 1. Create the Context
const StudentContext = createContext();

// 2. Sample student data (static, no backend needed)
const studentData = [
  {
    id: 1,
    name: "Aarav Sharma",
    rollNumber: "CSE001",
    course: "Computer Science",
    year: "3rd Year",
  },
  {
    id: 2,
    name: "Priya Patel",
    rollNumber: "CSE002",
    course: "Computer Science",
    year: "2nd Year",
  },
  {
    id: 3,
    name: "Rohan Gupta",
    rollNumber: "ECE003",
    course: "Electronics",
    year: "4th Year",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    rollNumber: "ME004",
    course: "Mechanical Engineering",
    year: "1st Year",
  },
  {
    id: 5,
    name: "Vikram Singh",
    rollNumber: "CSE005",
    course: "Computer Science",
    year: "3rd Year",
  },
  {
    id: 6,
    name: "Ananya Iyer",
    rollNumber: "IT006",
    course: "Information Technology",
    year: "2nd Year",
  },
  {
    id: 7,
    name: "Karthik Nair",
    rollNumber: "CE007",
    course: "Civil Engineering",
    year: "4th Year",
  },
  {
    id: 8,
    name: "Meera Joshi",
    rollNumber: "CSE008",
    course: "Computer Science",
    year: "1st Year",
  },
];

// 3. Provider component that wraps the app and shares state
export function StudentProvider({ children }) {
  const [favouriteStudents, setFavouriteStudents] = useState([]);

  // Check if a student is already in favourites
  function isFavourite(studentId) {
    return favouriteStudents.some((student) => student.id === studentId);
  }

  // Add a student to favourites (prevent duplicates)
  function addToFavourite(student) {
    if (!isFavourite(student.id)) {
      setFavouriteStudents((prev) => [...prev, student]);
    }
  }

  // Remove a student from favourites by id
  function removeFromFavourite(studentId) {
    setFavouriteStudents((prev) =>
      prev.filter((student) => student.id !== studentId)
    );
  }

  // Value object passed to all consumers
  const value = {
    students: studentData,
    favouriteStudents,
    addToFavourite,
    removeFromFavourite,
    isFavourite,
  };

  return (
    <StudentContext.Provider value={value}>{children}</StudentContext.Provider>
  );
}

// 4. Custom hook for easy access — any component can call useStudentContext()
export function useStudentContext() {
  return useContext(StudentContext);
}

export default StudentContext;
