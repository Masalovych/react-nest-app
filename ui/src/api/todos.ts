import Axios from 'axios'
import { ITodo } from './interfaces'

const baseUrl = 'api/todos'

const getAll = (): Promise<ITodo[]> => Axios.get(baseUrl).then(res => res.data)

export {
  getAll,
}