import Axios from 'axios'
import { ITodo } from './interfaces'

const baseUrl = 'api/todos'

const getTodos = (): Promise<ITodo[]> => Axios.get(baseUrl).then(res => res.data)

export {
  getTodos,
}