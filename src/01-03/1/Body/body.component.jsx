import React, { useEffect, useState } from "react";
import { BodyDiv } from "./body.style";
import students from "./../../mock/students";

function Body({ setLength }) {
  const [student, setStudent] = useState(students);

  const deleteStudent = (id) => {
    let res = student.filter((item) => item.id !== id);
    setStudent(res);
  };

  useEffect(() => {
    setLength(student.length);
  }, [student]);

  return (
    <BodyDiv>
      <h2>All students - {student.length}</h2>
      {student.map((item) => (
        <h2 key={item.id}>
          {item.id} - {item.name}{" "}
          <button onClick={() => deleteStudent(item.id)}>Delete</button>
        </h2>
      ))}
    </BodyDiv>
  );
}

export default Body;
