/*  Sort tables by clicking on table headers
    ---
    Author: Tymon Sturgeon / Scryptonite (https://github.com/scryptonite)
    Created: 2020-04-25
*/
const tableSortDirectionMap = new WeakMap();

function getCellString(row, index) {
    const cell = row.cells[index];
    const image = cell.querySelector("img");
    if (!!image && image.hasAttribute("alt"))
        return image.alt.trim();
    else if (!!image && image.hasAttribute("src"))
        return image.src;
    else
        return cell.innerText.trim();
}

function sortTable(table, tbody, columnIndex = 0, ascending = true) {

    const rows = Array.from(tbody.rows);
    rows.sort((a, b) => {
        const aCellString = getCellString(a, columnIndex);
        const bCellString = getCellString(b, columnIndex);
        return aCellString.localeCompare(bCellString) *
            (ascending ? +1 : -1);
    }).forEach(row => {
        tbody.appendChild(row);
    });
}

function main() {
    document.addEventListener("click", (event) => {
        // get clicked on <th>:
        const th = event.target.closest("thead th");
        if (!th) return;
        // ... and its table:
        const table = th.closest("table");
        // ... and the main table body:
        const tbody = table.querySelector("tbody");

        // get index of table head:
        let columnIndex = 0;
        let el = th;
        while (!!(el = el.previousElementSibling))
            columnIndex++;
        if (!tbody) return;

        let [_columnIndex, ascending] = tableSortDirectionMap.has(table) ?
            tableSortDirectionMap.get(table) :
            [columnIndex, true];
        if (_columnIndex !== columnIndex)
            ascending = true;

        sortTable(table, tbody, columnIndex, ascending);

        tableSortDirectionMap.set(table, [columnIndex, !ascending]);

    }, {
        capture: true
    });
}

let alreadyRan = false;

function runMainOnce() {
    if (!alreadyRan) {
        alreadyRan = true;
        main();
    }
}
window.addEventListener("load", () => runMainOnce(), {
    once: true
});
if (document.readyState !== "complete") {
    document.addEventListener("DOMContentLoaded", event => {
        if (document.readyState === "complete") {
            runMainOnce();
        }
    }, {
        once: true
    });
} else {
    runMainOnce();
}
