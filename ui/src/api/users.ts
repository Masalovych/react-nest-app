import Axios from 'axios'
import { IUser } from './interfaces'

const baseUrl = 'api/users'

const getAll = (): Promise<IUser[]> => Axios.get(baseUrl).then(res => res.data)

export {
  getAll,
}