import React from 'react';

let NumberInput = () => {

    return (
        <label htmlFor='x'>
            Prvé číslo
            <input
                id="x"
                type="number"
                name="x"
                required
                value="0"
            />
        </label>
    )
}
export default NumberInput;