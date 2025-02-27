function addRow() {
    let table = document.getElementById("subjectTable");
    let row = table.insertRow();
    row.innerHTML = `
        <td><input type="text" class="subject" placeholder="Subject"></td>
        <td><input type="number" class="grade" placeholder="Grade (0-10)" min="0" max="10"></td>
        <td><input type="number" class="credit" placeholder="Credits" min="1"></td>
        <td><button onclick="removeRow(this)">❌</button></td>
    `;
}

function removeRow(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function calculateCGPA() {
    let grades = document.querySelectorAll(".grade");
    let credits = document.querySelectorAll(".credit");
    let totalCredits = 0;
    let weightedSum = 0;

    for (let i = 0; i < grades.length; i++) {
        let grade = parseFloat(grades[i].value);
        let credit = parseFloat(credits[i].value);

        if (!isNaN(grade) && !isNaN(credit)) {
            weightedSum += grade * credit;
            totalCredits += credit;
        }
    }

    let cgpa = totalCredits ? (weightedSum / totalCredits).toFixed(2) : 0;
    document.getElementById("result").innerText = `Your CGPA: ${cgpa}`;
}
