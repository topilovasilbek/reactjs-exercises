import { BodyDiv } from "./body.style";

function Body({ student, deleteStudent }) {
  return (
    <BodyDiv>
      <h2>All students - {student.length}</h2>
      {student.map((item, index) => (
        <h2 key={item.id ?? index}>
          {item.id} - {item.name}{" "}
          <button onClick={() => deleteStudent(item.id)}>Delete</button>
        </h2>
      ))}
    </BodyDiv>
  );
}

export default Body;
