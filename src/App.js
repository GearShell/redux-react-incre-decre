import React from 'react';
import "./App.css";
import {useSelector, useDispatch} from "react-redux";
import {incNumber, decNumber, reSet} from "./actions/Index";

function App() {

    const changeNumber = useSelector(state => state.changeNumber);

    const disPatch = useDispatch();

  return (
    <>
        <div className="main-div">
            <div className='container'>
                <h1>Increment and Decrement</h1>
                <h4>Using React-Redux</h4>

                <div className="quantity">
                    <a class="quantity__minus" title="Decrement" onClick={() => disPatch(decNumber())}><span>-</span></a>
                    <input name="quantity" type="text" class="quantity__input" value={changeNumber} />
                    <a class="quantity__plus" title="Increment" onClick={() => disPatch(incNumber())}><span>+</span></a>
                    <a class="quantity__reset" title="Reset" onClick={() => disPatch(reSet())}><span>x</span></a>
                </div>
            </div>
        </div>
    </>
  );
};

export default App;