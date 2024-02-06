import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { plusNumber, minusNumber } from "./redux/modules/calculator";

function App() {
  const dispatch = useDispatch();
  const plusNumber = useSelector((state) => state.calculator.plusNumber);
  const minusNumber = useSelector((state) => state.calculator.minusNumber);
  const [number, setNumber] = useState(0);
  const plusNumberHandler = () => {
    dispatch(plusNumber(number));
  };
  const minusNumberHandler = () => {
    dispatch(minusNumber(number));
  };
  const changeHandler = (event) => {
    const { value } = event.target;
    setNumber(+value);
  };

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input type="number" onChange={changeHandler} /> 만큼을
        <button onClick={plusNumberHandler}>더할게요</button>
        <button onClick={minusNumberHandler}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>0</p>
      </div>
    </div>
  );
}

export default App;
