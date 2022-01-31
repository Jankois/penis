import React, {useState} from "react";
import NumberInput from "./NumberInput";
import Select from "react-select";
import Result from "./Result";

const CalculatorForm = (props) => {

    const [selectedOptionState, setSelectedOptionState] = useState({
        selectedOption: {
            value: '--Vyber operacie--',
            label: '--Vyber operacie--'
        }
    })

    const [resultState, setResultState] = useState(null)

    const options = [
        { value: 'ADD', label: 'Sčítanie'},
        { value: 'SUBTRACT', label: 'Odčítanie'},
        { value: 'MULTIPLY', label: 'Násobenie'},
        { value: 'DIVIDE', label: 'Delenie'},
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        const result = calculate();
        console.log(result);
        setResultState(result);
    };

    const handleChange = (selectedOptionState) => {
        setSelectedOptionState({ selectedOptionState });
    };

    let calculate = () =>{
        const { x, y} = props;
        switch (selectedOptionState.selectedOptionState.value){
            case 'ADD':
                return parseFloat(x) + parseFloat(y);
            case 'SUBTRACT':
                return parseFloat(x) - parseFloat(y);
            case 'MULTIPLY':
                return parseFloat(x) * parseFloat(y);
            case 'DIVIDE':
                return parseFloat(x) / parseFloat(y);
            default:
                return null;
        }
    };

    return (
        <div>
            <form className="CalculatorForm" onSubmit={handleSubmit}>
                <NumberInput label = "Číslo 1" name = "cislo1" value={props.x} onChange={props.xOnChange}/>
                <NumberInput label = "Číslo 2" name = "cislo2" value={props.y} onChange={props.yOnChange}/>
                <Select onChange={handleChange} value={selectedOptionState.value} options={options} />
                <input type="submit" value="Spočítaj" />
            </form>
            <Result x={resultState}/>
        </div>
    );
};

export default CalculatorForm;