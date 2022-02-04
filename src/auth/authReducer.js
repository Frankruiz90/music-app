
// const state = {
//   name: 'frank',
//   logged: true
// }
import { types } from '../type/types'

export const authReducer = ( state = {}, action ) => {
  switch (action.types) {
    case types.login:
      return {
        ...action.playload,
        logged: true
      }
    case types.logout:
      return {
        logged: false
      }
      
    default:
      return state;
      ;
  }
}