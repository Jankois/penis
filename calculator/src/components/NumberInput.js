import React from 'react';

let NumberInput = (props) => {
    const {name, label} = props;
    return (
        <label htmlFor={name}>
            {label}
            <input
                onChange={props.onChange}
                id={name}
                type="number"
                name={name}
                required
            />
        </label>
    )
}

export default NumberInput;