import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

function CounterFeature(props) {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const handleIncreaseClick = () => {
        const action = increase();
        dispatch(action);
    };
    const handleDecreaseClick = () => {
        // const action = decrease();
        dispatch(decrease());
    };
    return (
        <div>
            Counter: {counter}
            <div>
                <button onClick={handleIncreaseClick}>Increase</button>
                <button onClick={handleDecreaseClick}>Decrease</button>
            </div>
        </div>
    );
}

CounterFeature.propTypes = {};

export default CounterFeature;
