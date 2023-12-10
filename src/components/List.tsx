import { Todo } from '../types'
import styled from '@emotion/styled'

type Props = {
  todo: Todo,
  handleDeleteTodo: (todo: Todo) => void,
}

const Checkbox = styled.input`
  margin: 0;
  height: 20px;
  width: 20px;
  border: 3px solid gray;
`

const Li = styled.li`
  list-style: none;
  display: flex;
  height: 24px;
  align-items: center;
  margin: 10px 0;
`

const TextSpan = styled.span`
  flex-grow: 1;
  margin: 0 10px;
  font-size: 16px;
`

const List = ({ todo, handleDeleteTodo } : Props) => {

  return (
    <Li>
      <Checkbox type="checkbox" onClick={() => handleDeleteTodo(todo)} />
      <TextSpan>{todo.text}</TextSpan>
    </Li>
  )
}

export default List