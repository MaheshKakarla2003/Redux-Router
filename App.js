

import './App.css'
import { useDispatch, useSelector } from 'react-redux';
// import updateValue from './reducers/updates';
import { increase, decrease } from './actions';
function App() {

  const x = useSelector((state) => state.updateValue)
  const dispatch = useDispatch()
  return (
    <>
      <center>
        <h1>Redux Counter</h1>
        <button onClick={() => dispatch(decrease())}>-</button> <input type='text' readOnly value={x} /> <button onClick={() => dispatch(increase())}>+</button>
      </center>
    </>
  );
}

export default App;
