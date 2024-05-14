//1
function compare(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}
//2
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
//3
function combineDigits(d1, d2, d3) {
    return parseInt(d1.toString() + d2.toString() + d3.toString());
}

//4
function calcArea(length, width = null) {
    if (width === null) {
        return length * length;
    } else {
        return length * width;
    }
}


//5
function isPerfect(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}



//6
function perfectInRange(min, max) {
    for (let i = min; i <= max; i++) {
        if (isPerfect(i)) {
            console.log(i);
        }
    }
}

//7
function formatTime(hours, minutes = 0, seconds = 0) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

//8
function timeToSeconds(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
}

//9
function secondsToTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;
    return formatTime(hours, minutes, seconds);
}

//10
function timeDiff(h1, m1, s1, h2, m2, s2) {
    const totalSeconds1 = timeToSeconds(h1, m1, s1);
    const totalSeconds2 = timeToSeconds(h2, m2, s2);
    const difference = Math.abs(totalSeconds1 - totalSeconds2);
    return secondsToTime(difference);
}