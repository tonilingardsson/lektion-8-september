import './App.css'
import { increment, decrement } from './reducers/counterReducer.js'
import { useDispatch } from 'react-redux'

import ViewCounter from './components/ViewCounter.jsx'

/**
 * Store - Håller vårt state
 * Reducer - Funktionerna som uppdaterar vårt state
 * Action - Som säger vilken funktion vi ska använda för att uppdatera state
 * Dispatch - Som triggar en action och uppdatering av state från en komponent
 */

function App() {
  // The Add dispatch action is sent here
  const dispatch = useDispatch();

  return (
    <main>
      <h1>Räknare</h1>
      <ViewCounter />
      {/* Here the increment is applied on the button */}
      <button className="counter" onClick={() => dispatch(increment(1))}>
        Öka med 1
      </button><br></br>
      <button className="counter" onClick={() => dispatch(decrement(1))}>
        Sänka med 1
      </button>
    </main>     
  )
}

export default App
