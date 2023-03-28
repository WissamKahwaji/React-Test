export function handleRemoveRow(index, rows, setRows) {
    setRows(rows.filter((_, i) => i !== index));
}