import React from "react";
import NumberInput from "./NumberInput";
import Select from "react-select";
import Result from "./Result";

const CalculatorForm = () => {
    return (
        <div>
            <form className="CalculatorForm">
                <NumberInput />
                <NumberInput />
                <Select />
                <input type="submit" value="Spočítaj" />
            </form>
            <Result/>
        </div>
    );
};
export default CalculatorForm;