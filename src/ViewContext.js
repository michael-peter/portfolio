import { useReducer, createContext } from 'react'
import Main from './components/Main'
import About from './components/About'
import Works from './components/Works'
import Mern from './components/Mern'
import Django from './components/Django'
import Dialogflow from './components/Dialogflow'
import Snatchbot from './components/Snatchbot'
import Python from './components/Python'
import Webcontent from './components/Webcontent'
import Article from './components/Article'

export const ViewContext = createContext()

function ViewReducer(state, action) {
  switch (action.type) {
    case 'SET_MAIN':
      return { ...state, name: "main", view: <Main /> }
    case 'SET_ABOUT':
      return { ...state, name: "about", view: <About /> }
    case 'SET_WORKS':
      return { ...state, name: "works", view: <Works /> }
    case 'SET_MERN':
      return { ...state, name: "mern", view: <Mern /> }
    case 'SET_DJANGO':
      return { ...state, name: "django", view: <Django /> }
    case 'SET_DIALOGFLOW':
      return { ...state, name: "dialogflow", view: <Dialogflow /> }
    case 'SET_SNATCHBOT':
      return { ...state, name: "snatchbot", view: <Snatchbot /> }
    case 'SET_PYTHON':
      return { ...state, name: "python", view: <Python /> }
    case 'SET_WEBCONTENT':
      return { ...state, name: "webcontent", view: <Webcontent /> }
    case 'SET_ARTICLE':
      return { ...state, name: "article", view: <Article /> }
    default:
      return state
  }
}

export function ViewContextProvider({ children }) {

  const [page, dispatch] = useReducer(ViewReducer, {
    name: "main",
    view: <Main />
  })

  const mobile = (window.innerWidth <= 768)

  return (
    <ViewContext.Provider value={{ ...page, dispatch, mobile }}>
      {children}
    </ViewContext.Provider>
  )
}