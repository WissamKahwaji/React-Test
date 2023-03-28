export function handleChangeValue(index, value, rows, setRows) {
    setRows(
        rows.map((row, i) =>
            i === index ? { ...row, value: parseFloat(value) || "" } : row
        )
    );
}