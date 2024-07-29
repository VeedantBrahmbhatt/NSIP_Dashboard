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
}
