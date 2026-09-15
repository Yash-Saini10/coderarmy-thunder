let olympicTimestamp = new Date(2028, 6, 14).getTime();

setInterval(() => {
    let currentTimestamp = Date.now();

    let remainingTime = olympicTimestamp - currentTimestamp;

    const days = Math.floor((remainingTime) / (1000 * 60 * 60 * 24));
    remainingTime %= 1000 * 60 * 60 * 24;

    const hours = Math.floor((remainingTime) / (1000 * 60 * 60));
    remainingTime %= 1000 * 60 * 60;

    const minutes = Math.floor((remainingTime) / (1000 * 60));
    remainingTime %= 1000 * 60;

    const seconds = Math.floor((remainingTime) / (1000));

    document.getElementById('days').textContent = `${days}`;
    document.getElementById('hours').textContent = `${hours}`;
    document.getElementById('minutes').textContent = `${minutes}`;
    document.getElementById('seconds').textContent = `${seconds}`;
}, 1000);