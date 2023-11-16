function table(n, m) {
  const table = document.createElement("table");
  for (let i = 0; i < n; ++i) {
    const tr = document.createElement("tr");

    for (let j = 0; j < m; ++j) {
      const td = document.createElement("td");
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  document.body.appendChild(table);
}

table(10, 7);
