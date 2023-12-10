import { useState } from 'react'
import styled from '@emotion/styled'
import { Todo } from '../types'

type Props = {
  handleAddTodo: (todo: Todo) => void,
  handleCancel: () => void,
}

const ModalDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
`

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 20px;
  width: 250px;
`

const ModalTitleH1 = styled.h1`
  color:#47c273;
  font-size: 24px;
`

const ModalInput = styled.input`
  border: 2px solid black;
  border-radius: 5px;
  line-height: 30px;
  width: 240px;
  margin-bottom: 10px;
`
const ModalButtonDiv = styled.div`
  display: flex;
  justify-content: end;
`

const ModalButtonSave = styled.button`
  border-radius: 5px;
  margin-right: 10px;
  border: none;
  color: white;
  background-color: #47c273;
  padding: 10px;
`

const ModalButtonCancel = styled.button`
  border-radius: 5px;
  margin-right: 10px;
  border: none;
  padding: 10px;
  background-color: #a9a9a9;
  color: white;
`

const ModalErrorMsg = styled.p`
  color: red;
`

const Modal = ({ handleAddTodo, handleCancel }: Props) => {
  const [text, setText] = useState("")
  const [hasError, setHasError] = useState(false)

  const saveTodo = () => {
    if (text) {
      const newTodo: Todo = {
        id: Math.random(),
        text,
      }
      handleAddTodo(newTodo)
    } else {
      setHasError(true)
    }
  }

  return (
    <ModalDiv>
      <ModalContent>
        <ModalTitleH1>新規登録</ModalTitleH1>
        <ModalInput type="text" placeholder="タスク名" value={text} onChange={(e) => setText(e.target.value)} />
        {hasError && <ModalErrorMsg>タスク名を入力してください</ModalErrorMsg>}
        <ModalButtonDiv>
          <ModalButtonSave onClick={saveTodo}>保存</ModalButtonSave>
          <ModalButtonCancel onClick={handleCancel}>キャンセル</ModalButtonCancel>
        </ModalButtonDiv>
      </ModalContent>
    </ModalDiv>
  )
}

export default Modal