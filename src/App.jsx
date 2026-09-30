import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentList from "./pages/StudentList";
import FavouriteStudents from "./pages/FavouriteStudents";

function App() {
  return (
    <div className="app">
      {/* Navbar is rendered on every page */}
      <Navbar />

      {/* Main content area with React Router */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/favourites" element={<FavouriteStudents />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
