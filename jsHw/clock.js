class Time {
    constructor(hours = 0, minutes = 0, seconds = 0) {
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
      this.normalizeTime();
    }
  
    displayTime() {
      const func = (num) => (num < 10 ? `0${num}` : num);
      return `${func(this.hours)}:${func(this.minutes)}:${func(this.seconds)}`;
    }
  
    
    changeSeconds(seconds) {
      this.seconds += seconds;
      this.normalizeTime();
    }
  

    changeMinutes(minutes) {
      this.minutes += minutes;
      this.normalizeTime();
    }
  

    changeHours(hours) {
      this.hours += hours;
      this.normalizeTime();
    }

    normalizeTime() {
      while (this.seconds >= 60) {
        this.seconds -= 60;
        this.minutes += 1;
      }
      while (this.minutes >= 60) {
        this.minutes -= 60;
        this.hours += 1;
      }
      while (this.seconds < 0) {
        this.seconds += 60;
        this.minutes -= 1;
      }
      while (this.minutes < 0) {
        this.minutes += 60;
        this.hours -= 1;
      }
      if (this.hours >= 24) {
        this.hours %= 24;
      }
      if (this.hours < 0) {
        this.hours = (this.hours % 24 + 24) % 24;
      }
    }
  }
  let time= new Time(20,20,15);
  console.log(time.displayTime());

  time.changeSeconds(20);
  console.log(currentTime.displayTime());

  time.changeMinutes(25);
  console.log(time.displayTime());

  time.changeHours(6);
  console.log(time.displayTime());
  
  time.changeSeconds(-80);
  console.log(time.displayTime());

