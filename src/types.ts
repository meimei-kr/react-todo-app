export type Todo = {
  id: number
  text: string
}

export type TodoAction =
  | { type: "add"; payload: Todo }
  | { type: "delete"; payload: number }

export type TodoState = Todo[]