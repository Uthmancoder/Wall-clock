        let hoursEl = document.querySelector(".hours")
        let minEl = document.querySelector(".minutes")
        let secEl = document.querySelector(".seconds")
        setInterval(() => {8
            const date = new Date;
            // console.log(date);
            let secDeg = date.getSeconds()/ 60 * 360 - 90;
           let minDeg = date.getMinutes()/ 60 * 360 - 90;
           let hourDeg = date.getHours()/12 * 360 - 90;
           secEl.style.transform = `rotate(${secDeg}deg)`
           minEl.style.transform = `rotate(${minDeg}deg)`
           hoursEl.style.transform = `rotate(${hourDeg}deg)`
        }, 1000);