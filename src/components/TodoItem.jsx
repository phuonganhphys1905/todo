import styled from "styled-components";

const TaskDetail = styled.div`
  display: flex;
  gap: 20px;
`;
const Content = styled.p`
  margin: 0px;
`;

const TodoItem = (props) => {
  const { item } = props;
  return (
    <TaskDetail>
      <input type="checkbox" name="" id="checkbox" />
      <Content>{item.name}</Content>
      <button>Delete</button>
      <button>Edit</button>
    </TaskDetail>
  );
};

export default TodoItem;
