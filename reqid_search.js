function searchTable() {
    const input = document.getElementById("searchRequestID");
    const filter = input.value.toUpperCase();
    const table = document.querySelector("table tbody");
    const rows = Array.from(allRows);

    filteredRows = rows.filter(row => {
        const td = row.getElementsByTagName("td")[0];
        if (td) {
            const txtValue = td.textContent || td.innerText;
            return txtValue.toUpperCase().indexOf(filter) > -1;
        }
        return false;
    });

    if (filter === "") {
        filteredRows = rows;
    }

    displayTablePage(currentPage, filteredRows);
}
