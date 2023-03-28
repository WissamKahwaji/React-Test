export function handleToggleEnabled(index, rows, setRows) {
    setRows(
        rows.map((row, i) =>
            i === index ? { ...row, enabled: !row.enabled } : row
        )
    );
}