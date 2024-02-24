document.addEventListener('DOMContentLoaded', function () {
    // Dummy data for team information
    const teamInfo = {
        name: "Example Team",
        founded: "2015",
        captain: "Captain Name",
        coach: "Coach Name"
    };

    // Dummy data for achievements
    const achievements = [
        "First Place - Championship 2020",
        "Second Place - Tournament 2019",
        "Top 8 - Major League 2018"
    ];

    // Populate team information
    const teamDetails = document.getElementById('team-details');
    teamDetails.innerHTML = `
        <p><strong>Name:</strong> ${teamInfo.name}</p>
        <p><strong>Founded:</strong> ${teamInfo.founded}</p>
        <p><strong>Captain:</strong> ${teamInfo.captain}</p>
        <p><strong>Coach:</strong> ${teamInfo.coach}</p>
    `;

    // Populate achievements
    const achievementList = document.getElementById('achievement-list');
    achievements.forEach(achievement => {
        const listItem = document.createElement('li');
        listItem.textContent = achievement;
        listItem.classList.add('achievement');
        achievementList.appendChild(listItem);
    });
});
