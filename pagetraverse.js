let currentPage = 1;
const rowsPerPage = 10;

function displayTablePage(page) {
    const table = document.querySelector("table tbody");
    const rows = Array.from(table.rows);
    const totalRows = rows.length;
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    rows.forEach((row, index) => {
        row.style.display = (index >= start && index < end) ? "" : "none";
    });

    document.getElementById("prevPage").disabled = page === 1;
    document.getElementById("nextPage").disabled = end >= totalRows;
}

function changePage(direction) {
    currentPage += direction;
    displayTablePage(currentPage);
}

window.onload = function() {
    displayTablePage(currentPage);
};
