export function handleChangeSign(index, sign, rows, setRows) {
    setRows(
        rows.map((row, i) => (i === index ? { ...row, sign } : row))
    );
}