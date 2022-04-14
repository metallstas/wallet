import { Provider } from 'react-redux'
import './App.css'
import { RooteRouter } from './navigation/RootRouter'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <RooteRouter />
      </div>
    </Provider>
  )
}

export default App
