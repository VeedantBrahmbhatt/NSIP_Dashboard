function filterByCircle() {
    const select = document.getElementById("circleFilter");
    const filter = select.value.toUpperCase();
    const table = document.querySelector("table tbody");
    const rows = Array.from(allRows);

    filteredRows = rows.filter(row => {
        const td = row.getElementsByTagName("td")[1];
        if (td) {
            const txtValue = td.textContent || td.innerText;
            return filter === "ALL" || txtValue.toUpperCase() === filter;
        }
        return false;
    });

    if (filter === "ALL") {
        filteredRows = rows;
    }

    displayTablePage(currentPage, filteredRows);
}
