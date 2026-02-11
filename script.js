let score = 0;
let time = 30;
let started = false;

document.getElementById("btn").onclick = () => {
  if (!started) {
    started = true;
    let timer = setInterval(() => {
      time--;
      document.getElementById("time").textContent = time;
      if (time === 0) {
        clearInterval(timer);
        alert("O‘yin tugadi! Ball: " + score);
      }
    }, 1000);
  }
  
  if (time > 0) {
    score++;
    document.getElementById("score").textContent = score;
  }
};