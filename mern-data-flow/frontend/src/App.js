import { useEffect, useState } from "react";
import StudentForm from "./components/StudentForm";

function App() {
  const [students, setStudents] = useState([]);

  const fetchStudents = () => {
    fetch("http://localhost:5000/students")
      .then(res => res.json())
      .then(data => setStudents(data));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Student List</h1>

      <StudentForm onAdd={fetchStudents} />

      {students.map((s) => (
        <div key={s._id}>
          <h3>{s.name}</h3>
          <p>{s.course}</p>
        </div>
      ))}
    </div>
  );
}

export default App;