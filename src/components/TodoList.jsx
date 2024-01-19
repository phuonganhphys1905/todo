import styled from "styled-components";
import TodoItem from "./TodoItem";

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 20px;
`;

const TodoList = (props) => {
  const DATA = [
    {
      id: "1",
      name: "Go Shopping",
      done: true,
      delete: false,
    },
    {
      id: "2",
      name: "Go School",
      done: true,
      delete: false,
    },
  ];
  return (
    <TaskList>
      {DATA.map((item, index) => {
        return <TodoItem key={index} item={item} />;
      })}
    </TaskList>
  );
};

export default TodoList;
