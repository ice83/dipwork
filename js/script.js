const time = 1000; 
const step = 20;

function counterNum(num, elem) {
    let l = document.querySelector(elem);
    n = 0;
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
        n = n + step;
        if (n >= num) { 
            clearInterval(interval);
        }
        l.innerHTML = n;
    },
        t);   
};

counterNum(1280, '#counter');






