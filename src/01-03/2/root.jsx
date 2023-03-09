import React, { useState } from "react";
import Navbar from "./Navbar/navbar.component";
import Body from "./Body/body.component";
import students from "../mock/students";

function Root(props) {
  const [student, setStudent] = useState(students);

  const deleteStudent = (id) => {
    let res = student.filter((item) => item.id !== id);
    setStudent(res);
  };

  return (
    <>
      <Navbar length={student.length} />
      <Body student={student} deleteStudent={deleteStudent} />
    </>
  );
}

export default Root;
