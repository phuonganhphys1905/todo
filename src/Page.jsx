import styled from "styled-components";

import AddTaskForm from "./components/AddTaskForm";
import TodoList from "./components/TodoList";

const Title = styled.h1`
  color: red;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Page = (props) => {
  return (
    <Wrapper>
      <Title>TO-DO</Title>
      <AddTaskForm />
      <TodoList />
    </Wrapper>
  );
};
