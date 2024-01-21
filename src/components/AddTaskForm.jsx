import styled from "styled-components";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../features/todoSlice";

const CreateTask = styled.div`
  display: flex;
  gap: 10px;
  height: 30px;
`;

const AddTaskForm = (props) => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: uuidv4(),
      name: todo,
    };
    // console.log(todo);
    dispatch(addTodo(newTodo));
    setTodo("");
  };
  return (
    <CreateTask>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id="add-task"
          value={todo}
          placeholder="Do Homework"
          onChange={(event) => setTodo(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </CreateTask>
  );
};

export default AddTaskForm;
