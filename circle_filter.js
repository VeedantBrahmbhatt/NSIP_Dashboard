function filterByCircle() {
    const select = document.getElementById("circleFilter");
    const filter = select.value.toUpperCase();
    const table = document.querySelector("table tbody");
    const rows = Array.from(table.getElementsByTagName("tr"));

    rows.forEach(row => {
        const td = row.getElementsByTagName("td")[1];
        if (td) {
            const txtValue = td.textContent || td.innerText;
            row.style.display = (filter === "ALL" || txtValue.toUpperCase() === filter) ? "" : "none";
        }
    });
}
