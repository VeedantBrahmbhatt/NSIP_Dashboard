let currentPage = 1;
const rowsPerPage = 15;
let allRows = [];
let filteredRows = [];

function displayTablePage(page, rows) {
    const table = document.querySelector("table tbody");
    const totalRows = rows.length;
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    table.innerHTML = "";
    rows.slice(start, end).forEach(row => table.appendChild(row));

    updatePaginationControls(totalRows);
    updateEntriesInfo(start + 1, end > totalRows ? totalRows : end, totalRows);
}

function updatePaginationControls(totalRows) {
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.classList.add("page-button");
        if (i === currentPage) {
            button.classList.add("active");
        }
        button.onclick = function () {
            currentPage = i;
            displayTablePage(currentPage, filteredRows);
        };
        paginationContainer.appendChild(button);
    }
}

function updateEntriesInfo(start, end, total) {
    const entriesInfo = document.getElementById("entriesInfo");
    entriesInfo.textContent = `Showing ${start} to ${end} of ${total} entries`;
}

function updateTableDisplay(rows) {
    filteredRows = rows;
    currentPage = 1;
    displayTablePage(currentPage, filteredRows);
}

window.onload = function() {
    const tableBody = document.getElementById("tableBody");
    allRows = Array.from(tableBody.getElementsByTagName("tr"));
    filteredRows = allRows;
    displayTablePage(currentPage, filteredRows);
};
