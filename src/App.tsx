import { useState } from 'react'
import { createPortal } from 'react-dom'
import styled from '@emotion/styled'
import List from './components/List'
import Modal from './components/Modal'
import { Todo } from './types'

const ModalPortal = ({ children }: { children: React.ReactNode }) => {
  const target = document.querySelector(".modal")
  return target ? createPortal(children, target) : null
}

const ContainerDiv = styled.div`
  width: 350px;
  height: 450px;
  border: 1px solid black;
  position: relative;
`

const TitleH1 = styled.h1`
  background-color: #47c273;
  color: white;
  margin: 0;
  height: 70px;
  line-height: 70px;
  font-size: 24px;
  text-align: center;
`

const AddButton = styled.button`
  background-color: #47c273;
  border-radius: 50%;
  padding: 10px;
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 10px;
  right: 10px;
`

const Ul = styled.ul`
  padding: 0 20px;
`

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo])
    setIsModalOpen(false)
  }

  const cancel = () => {
    setIsModalOpen(false)
  }

  const handleDeleteTodo = (todo: Todo) => {
    setTodos(todos.filter((_todo) => _todo.id !== todo.id))
  }

  return (
    <ContainerDiv>
      <div className="modal"></div>
      <TitleH1>TODO List</TitleH1>
      <Ul>
        {todos.map((todo) => <List key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} />)}
      </Ul>
      <AddButton onClick={() => setIsModalOpen(true)} disabled={isModalOpen}>+</AddButton>
      {isModalOpen &&
        <ModalPortal>
          <Modal handleAddTodo={addTodo} handleCancel={cancel} />
        </ModalPortal>
      }
    </ContainerDiv>
  )
}

export default App