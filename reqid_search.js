function searchTable() {
    const input = document.getElementById("searchRequestID");
    const filter = input.value.toUpperCase();
    const table = document.querySelector("table tbody");
    const rows = Array.from(table.getElementsByTagName("tr"));

    rows.forEach(row => {
        const td = row.getElementsByTagName("td")[0];
        if (td) {
            const txtValue = td.textContent || td.innerText;
            row.style.display = txtValue.toUpperCase().indexOf(filter) > -1 ? "" : "none";
        }
    });

    // Reset pagination
    currentPage = 1;
    updatePagination(rows);
}

function updatePagination(rows) {
    const visibleRows = rows.filter(row => row.style.display !== "none");
    const totalRows = visibleRows.length;
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    rows.forEach((row, index) => {
        row.style.display = (visibleRows.includes(row) && index >= start && index < end) ? "" : "none";
    });

    document.getElementById("prevPage").disabled = currentPage === 1;
    document.getElementById("nextPage").disabled = end >= totalRows;
}
