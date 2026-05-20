const refreshBtn = document.getElementById("refreshBtn");
const timeField = document.getElementById("time");
const logTable = document.getElementById("logTable");

function updateTime() {
    const now = new Date();

    const formattedTime = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    timeField.textContent = formattedTime;
}

updateTime();

setInterval(updateTime, 1000);

refreshBtn.addEventListener("click", () => {

    const activities = [
        "Suspicious Movement",
        "Object Detected",
        "Unauthorized Access",
        "Restricted Area Entry",
        "Abandoned Object"
    ];

    const statuses = [
        {
            text: "Verified",
            className: "success"
        },
        {
            text: "Under Review",
            className: "pending"
        },
        {
            text: "Alert Generated",
            className: "danger"
        }
    ];

    const randomActivity =
        activities[Math.floor(Math.random() * activities.length)];

    const randomStatus =
        statuses[Math.floor(Math.random() * statuses.length)];

    const currentTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });

    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${currentTime}</td>
        <td>${randomActivity}</td>
        <td class="${randomStatus.className}">
            ${randomStatus.text}
        </td>
    `;

    logTable.prepend(newRow);

    alert("Detection data refreshed successfully!");
});
