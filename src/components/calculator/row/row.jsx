import React from 'react'
import './row.css'
import { handleChangeSign, handleChangeValue, handleRemoveRow, handleToggleEnabled } from '../../../utils'

const Row = ({ index, rows, setRows, row }) => {
    return (
        <div key={index} className="row">
            <select
                className="sign"
                value={row.sign}
                onChange={(e) => handleChangeSign(index, e.target.value, rows, setRows)}
            >
                <option value="+">+</option>
                <option value="-">-</option>
            </select>
            <input
                className="value"
                type="number"
                value={row.value}
                onChange={(e) => handleChangeValue(index, e.target.value, rows, setRows)}
                disabled={!row.enabled}
            />
            <button
                className={`button ${row.enabled ? "disable-button" : "enable-button"
                    }`}
                onClick={() => handleToggleEnabled(index, rows, setRows)}
            >
                {row.enabled ? "Disable" : "Enable"}
            </button>
            <button className="button" onClick={() => handleRemoveRow(index, rows, setRows)}>
                Remove
            </button>
        </div>
    )
}

export default Row
