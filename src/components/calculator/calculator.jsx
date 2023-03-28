import React, { useState } from 'react'
import './calculator.css'
import { handleAddRow } from '../../utils';
import Row from './row/row';

const Calculator = () => {
    const [rows, setRows] = useState([{ sign: "+", value: "", enabled: true }]);


    const addRow = () => handleAddRow(rows, setRows)


    const sum = rows.reduce(
        (acc, row) => (row.enabled ? acc + (row.sign === "+" ? row.value : -row.value) : acc),
        0
    );

    return (
        <div className="calculator">
            {rows.map((row, index) => (

                <Row
                    index={index}
                    row={row}
                    rows={rows}
                    setRows={setRows}
                // sign={row.sign}
                // value={row.value}
                // enabled={row.enabled}
                />


            ))}
            <button className="button" onClick={addRow}>
                Add Row
            </button>
            <div className="sum">Sum: {sum}</div>
        </div>
    )
}

export default Calculator
