import React from 'react'
import { IAction, IState } from './interfaces'


const initialState: IState = {
  episodes: [],
  filterFavorites: false,
}

const Store = React.createContext<IState | any>(initialState)

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...action.payload }
    case 'TOGGLE_FAV':
      return { ...action.payload }
    case 'TOGGLE_DISPLAY':
      return { ...action.payload }
    default:
      return state
  }
}

function StoreProvider(props: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>
}

export { Store, StoreProvider }
