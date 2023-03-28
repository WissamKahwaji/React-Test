export function handleAddRow(rows, setRows) {
    const newRow = {
      sign: "+",
      value: 0,
      enabled: true,
    };
    setRows([...rows, newRow]);
  }