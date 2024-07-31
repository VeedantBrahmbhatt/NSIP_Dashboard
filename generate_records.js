function generateRecords() {
    const tableBody = document.getElementById("tableBody");
    const circles = ["Mumbai", "AP", "Delhi", "Kolkata"];
    
    for (let i = 1; i <= 100; i++) {
        const tr = document.createElement("tr");

        const td1 = document.createElement("td");
        td1.textContent = i;
        tr.appendChild(td1);

        const td2 = document.createElement("td");
        td2.textContent = circles[Math.floor(Math.random() * circles.length)];
        tr.appendChild(td2);

        const td3 = document.createElement("td");
        td3.textContent = `Node-${i}`;
        tr.appendChild(td3);

        const td4 = document.createElement("td");
        tr.appendChild(td4);

        const td5 = document.createElement("td");
        tr.appendChild(td5);

        const td6 = document.createElement("td");
        tr.appendChild(td6);

        const td7 = document.createElement("td");
        tr.appendChild(td7);

        tableBody.appendChild(tr);
    }

    // Initialize pagination
    filteredRows = Array.from(tableBody.getElementsByTagName("tr"));
    displayTablePage(currentPage, filteredRows);
}

window.onload = function() {
    generateRecords();
};
