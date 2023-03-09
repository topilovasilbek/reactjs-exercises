import React, { useState } from "react";
import Navbar from "./Navbar/navbar.component";
import Body from "./Body/body.component";
import students from "../mock/students";

function Root(props) {
  const [length, setLength] = useState(students.length);

  return (
    <>
      <Navbar length={length} />
      <Body setLength={setLength} />
    </>
  );
}

export default Root;
