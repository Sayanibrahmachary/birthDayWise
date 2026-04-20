let heartInterval; // store interval

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";

  document.querySelector(".love-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// START hearts
heartInterval = setInterval(createHeart, 300);

window.onload = () => {
  const first = document.getElementById("first");
  const second = document.getElementById("second");
  const third = document.getElementById("third");

  // Show first
  first.classList.add("show");

  // After 2.5s → hide first, show second
  setTimeout(() => {
    first.classList.remove("show");
    first.classList.add("hidden");

    second.classList.remove("hidden");
    second.classList.add("show");
  }, 2500);

  // After 5s → hide second, show third
  setTimeout(() => {
    second.classList.remove("show");
    second.classList.add("hidden");

    third.classList.remove("hidden");
    third.classList.add("show");
  }, 5000);
};

function yesFunction() {
  const blackScreen = document.querySelector(".lightOffSection");
  const loveContainer = document.querySelector(".love-container");

  // stop hearts
  clearInterval(heartInterval);

  // show black screen
  blackScreen.style.opacity = "1";
  blackScreen.style.pointerEvents = "all"; // enable click

  loveContainer.style.display = "none";
}

function lightsOnFunc() {
  const blackScreen = document.querySelector(".lightOffSection");
  const whiteScreen = document.querySelector(".lightsOnSection");

  // hide black screen
  blackScreen.style.opacity = "0";
  blackScreen.style.pointerEvents = "none";

  // bring back content
  whiteScreen.style.display = "block";
  whiteScreen.style.opacity = "1";
  whiteScreen.style.pointerEvents = "all";


  // change background
  document.body.style.backgroundColor = "#fff0f5";
}

function playMusicFunc() {
  const music = document.getElementById("birthdayMusic");
  const third = document.getElementById("third");
  const btn = document.querySelector(".playMusic");
  const wishDiv = document.querySelector(".happyBirthWish");
  const whiteScreen = document.querySelector(".lightsOnSection");
  const msgDiv = document.querySelector(".msg");
  const wise = document.querySelector(".birthDayWise")

  music.play();
  btn.innerText = "Decorate....";

  setTimeout(() => {
    // Hide music section
    whiteScreen.style.opacity = "0";
    whiteScreen.style.pointerEvents = "none";

    // Show birthday image
    wishDiv.style.opacity = "1";
    wishDiv.style.pointerEvents = "all";

    // Restart hearts
    heartInterval = setInterval(createHeart, 300);
    document.querySelector(".love-container").style.display = "block";
    third.style.opacity="0"

    // 👉 NEW: After 5s, switch to message
    setTimeout(() => {
      wishDiv.style.opacity = "0";
      wishDiv.style.pointerEvents = "none";

      msgDiv.style.opacity = "1";
      msgDiv.style.pointerEvents = "all";

      setTimeout(() => {
        msgDiv.style.opacity = "0";
        msgDiv.style.pointerEvents = "none";

        wise.style.opacity = "1";
        wise.style.pointerEvents = "all";
      }, 2500); // you can change to 3000 if you want

    }, 5000);

  }, 5000);
}

function openPlease() {
  const third = document.getElementById("third");
  const pleaseDiv = document.getElementById("please");
  const container = document.querySelector(".love-container");

  container.style.display = "none"; // 🔥 IMPORTANT

  pleaseDiv.style.display = "flex";
} 


function yesFromPlease() {
  const pleaseDiv = document.getElementById("please");
  const container = document.querySelector(".love-container");
  const third = document.getElementById("third");

  pleaseDiv.style.display = "none";

  container.style.display = "block"; // 🔥 bring back container
  third.classList.remove("hidden");
  third.classList.add("show");
}

