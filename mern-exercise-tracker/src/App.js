import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercise-list.component";
import EditExercises from "./components/edit-exercises.component";
import CreateExercises from "./components/create-exercise.component";
import CreateUsers from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Routes>
          <Route path="/" element={ <ExercisesList /> } />
          <Route path="/edit/:id" element={ <EditExercises /> } />
          <Route path="/create" element={ <CreateExercises /> } />
          <Route path="/user" element={ <CreateUsers /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
