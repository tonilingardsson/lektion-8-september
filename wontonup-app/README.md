How Redux works:

Button click
   ↓
dispatch({ type: "DECREMENT" })
   ↓
Redux store
   ↓
counterReducer(currentState, action)
   ↓
new state returned
   ↓
store saves new state
   ↓
useSelector receives new selected value
   ↓
React re-renders count

