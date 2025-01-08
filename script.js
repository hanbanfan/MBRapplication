document.addEventListener('DOMContentLoaded', () => {
    const liveSchedule = document.getElementById('live-schedule');
    const pastShows = document.getElementById('past-shows');

    // Load live schedule
    fetch('http://localhost:3000/admin/schedules')
        .then(response => response.json())
        .then(data => {
            liveSchedule.innerHTML = data.map(item => `<li>${item.title}: ${item.time}</li>`).join('');
        });

    // Load past shows
    fetch('http://localhost:3000/admin/shows')
        .then(response => response.json())
        .then(data => {
            pastShows.innerHTML = data.map(item => `<li><a href="${item.link}" target="_blank">${item.title}</a></li>`).join('');
        });
});

function donate() {
    alert('Redirecting to donation page...');
}
