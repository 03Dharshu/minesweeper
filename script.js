// getUserMedia();
let audio1 = new Audio('forest-with-small-river-birds-and-nature-field-recording-6735.mp3');
// audio1.play();
// audio1.loop = true;
let audio2 = new Audio('y2mate.com - Uncharted 2 Among Thieves Main Theme.mp3');
// audio2.play();
// audio2.loop = true;
// audio2.volume = 0.2;
let explo = new Audio('explosion.mp3');
let clicksound = document.getElementById("snd");
let opensound = document.getElementById("snd2");
let Gameovrsnd = document.getElementById("gme-ovr");
let vicsound = document.getElementById("vic");
let bombidx = [];
let GAMEOVER = false;
var counter = 0;
let a = 0;
let timerID;
let id;
const startingMinute = 0;
let time = startingMinute * 60;

function createBoxes(n, obj) {
  outer.innerHTML = "";
  outer2.innerHTML = "";
  outer3.innerHTML = "";
  for (let b = 0; b < n; b++) {
    let element = document.createElement("div");
    element.classList.add("box");
    element.setAttribute("id", `d${b}`);
    element.setAttribute("onclick", `changeBg(this)`);
    obj.appendChild(element);


  }

}


let easy = document.getElementById("outer");
let medium = document.getElementById("outer2");
let hard = document.getElementById("outer3");
let collect = document.getElementById("collect");
let name = document.getElementById("nmm");
let wel = document.getElementById("wel");
let welcome = document.getElementById("wellll");
let namme = document.getElementById("pid");
let status = document.getElementsByClassName("status")[0];
let game_ovr = document.getElementById("ggg");
let coinss = document.getElementById("tre");
let victory = document.getElementById("victory");

function Swap() {
  clicksound.play();
  let swift = document.getElementById("wrap");
  welcome.style.opacity = 1;
  if (name.value.length == 0) {
    welcome.textContent = "Please Enter your Name!!!";
    welcome.style.marginLeft = "700px";
    welcome.style.color = "dark-red";
    return;
  }
  welcome.textContent = "Hi " + `${name.value}` + ", Welcome to TREASURE ISLAND";

  wel.style.color = "#c54a4c";
  wel.textContent = `${name.value}`;
  let back = document.getElementById("b-b");
  swift.style.transform = "translatex(-20%)";
  victory.style.display = "none";
  back.style.opacity = 0;




}

function divert() {
  GAMEOVER = false;
  createBoxes(9, outer);
  let swift = document.getElementById("wrap");
  let back = document.getElementById("b-b");
  bombidx = []
  bombidx = Math.round(Math.random() * 8);
  console.log(bombidx);
  swift.style.transform = "translatex(-40%)";
  easy.style.opacity = 1;
  back.style.opacity = 1;
  medium.style.opacity = 0;
  hard.style.opacity = 0;
  collect.style.opacity = 1;
  welcome.style.opacity = 0;
  namme.textContent = `${name.value}`;
  a = 80;
  victory.style.display = "none";
  clicksound.play();

}
function divert2() {
  GAMEOVER = false;
  createBoxes(16, outer2);
  let swift = document.getElementById("wrap");
  let back = document.getElementById("b-b");
  bombidx = Math.round(Math.random() * 15);
  swift.style.transform = "translatex(-60%)";
  medium.style.opacity = 1;
  easy.style.opacity = 0;
  hard.style.opacity = 0;
  back.style.opacity = 1;
  collect.style.opacity = 1;
  welcome.style.opacity = 0;
  victory.style.display = "none";
  a = 150;
  clicksound.play();




}
function divert3() {
  GAMEOVER = false;
  createBoxes(25, outer3);
  let swift = document.getElementById("wrap");
  let back = document.getElementById("b-b");
  bombidx = Math.round(Math.random() * 24);
  swift.style.transform = "translatex(-80%)";
  hard.style.opacity = 1;
  easy.style.opacity = 0;
  medium.style.opacity = 0;
  back.style.opacity = 1;
  collect.style.opacity = 1;
  welcome.style.opacity = 0;
  victory.style.display = "none";
  a = 240;
  clicksound.play();
}
function back() {
  let swift = document.getElementById("wrap");
  let bck = document.getElementById("b-b");
  swift.style.transform = "translatex(-20%)";
  hard.style.opacity = 0;
  medium.style.opacity = 0;
  easy.style.opacity = 0;
  bck.style.opacity = 0;
  collect.style.opacity = 0;
  game_ovr.style.display = "none";
  victory.style.display = "none";
  counter = 0;
  clicksound.play();
  coinss.textContent = counter + "/" + a;


  // for(let i = 0; i < )


}
function exit2() {
  let swift = document.getElementById("wrap");
  let bck = document.getElementById("b-b");
  swift.style.transform = "translatex(0)";
  hard.style.opacity = 0;
  medium.style.opacity = 0;
  easy.style.opacity = 0;
  bck.style.opacity = 0;
  collect.style.opacity = 0;
  clicksound.play();
  welcome.style.opacity = 0;

}
function clse() {
  console.log("ckaram close ahgu");
  window.close();
  clicksound.play();

}

// let a = [];

// function mokkai_timer() {
//     for (let mins = 2; i > 0; i--) {
//         for (let secs = 59; i > 0 i--) {
//            minsS = mins < 10 ? "0" + mins : "" + mins;
//            secsS = secs < 10 ? "0" + secs : "" + secs;
//            a.push(minsS + ":" + secS)
//         }
//     }
// }

// mokkai_timer();

// function run_mokkai_timer(n) {
//   if ( n == a.length ){

//   }
// }

// function updateCountdown() {
//     let minutes = Math.floor(time / 60);
//     let seconds = time % 60;
//     seconds = seconds < 10 ? "0" + seconds : seconds;
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     countDown.innerHTML = ${minutes}:${seconds};
//     time++
// }

// function startCountdown() {
//     intervalId = setInterval(updateCountdown, 1000);
// }
function changeBg(obj) {

  // let div = document.getElementById(id);
  if (!GAMEOVER) {
    if (obj.id[1] == bombidx) {
      obj.style.backgroundImage = 'url("explosion.gif")';
      explo.play();

      setTimeout(() => {



        GAMEOVER = true;
        game_ovr.style.display = "unset";
        Gameovrsnd.play();
        hard.style.opacity = 0;
        medium.style.opacity = 0;
        easy.style.opacity = 0;
      }, 1300)
      clearInterval(timerID);
      setTimeout(() => { obj.style.backgroundImage = "none" }, 1000)

      return
      //           function stopCountdown() {
      //     clearInterval(intervalId);
      // }
    }
    obj.style.backgroundImage = `url("output-onlinegiftools(1).gif")`;
    obj.onclick = null;
    opensound.play();
    // obj.style.backgroundRepeat = "noRepeat";
    setTimeout(() => { obj.style.backgroundImage = "url(\"open.png\")" }, 1600)
    counter = counter + 10;
    // console.log(counter);
    // coinss.textContent=counter +"/150";

    coinss.textContent = counter + "/" + a;


  }

  if (counter == a) {
    victory.style.display = "unset";
    vicsound.play();
    clearInterval(timerID);
    hard.style.opacity = 0;
    medium.style.opacity = 0;
    easy.style.opacity = 0;
    counter = 0

  }

}

function startTimer() {
  let seconds = 0;
  let minutes = 0;



  function updateTimer() {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    document.getElementById('comp').textContent = `${formattedMinutes}:${formattedSeconds}`;
  }

  timerID = setInterval(updateTimer, 1000);
}

document.querySelector(".sd").addEventListener("click", startTimer);
// console.log("im running")



navigator.mediaDevices.getUserMedia({ audio: true })
  .then(function(stream) {
    audio2.play();
    audio1.play();
  })
  .catch(function(error) {
    // Permission denied or an error occurred
    console.error('Error accessing microphone:', error);
  });

document.getElementById("nmm").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    Swap();
  }
});
