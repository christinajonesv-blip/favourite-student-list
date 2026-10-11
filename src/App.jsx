import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentList from "./pages/StudentList";
import FavouriteStudents from "./pages/FavouriteStudents";
import { StudentProvider } from "./context/StudentContext";

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <div className="app">
          <Navbar />

          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route
              path="/favourites"
              element={<FavouriteStudents />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;
