import styled from "styled-components";

const CreateTask = styled.div`
  display: flex;
  gap: 10px;
  height: 30px;
`;

const AddTaskForm = (props) => {
  return (
    <CreateTask>
      <input type="text" name="" id="add-task" placeholder="Do Homework" />
      <button>Add</button>
    </CreateTask>
  );
};

export default AddTaskForm;
