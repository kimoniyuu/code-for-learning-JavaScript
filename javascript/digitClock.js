function digitalClock(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    let formattedHours = padZero(hours);
    let formattedMinutes = padZero(minutes);
    let formattedSeconds = padZero(secs);

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function padZero(num) {
    return num < 10 ? "0" + num : num;
}

console.log(digitalClock(5025)); // Output: "01:23:45"
console.log(digitalClock(61201)); // Output: "17:00:01"
console.log(digitalClock(87000)); // Output: "00:10:00"
