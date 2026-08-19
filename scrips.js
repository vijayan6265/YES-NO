const question = document.getElementById("question");
const gif = document.getElementById("gif");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");


// YES BUTTON
yesBtn.addEventListener("click", () => {

  question.innerHTML = "I knew it 😍";

  gif.src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";

  noBtn.style.display = "none";
});


// function moveNoButton() {
//   noBtn.style.position = "fixed";

//   const padding = 20;

//   // offsetWidth-க்கு பதிலாக getBoundingClientRect துல்லியமானது
//   const rect = noBtn.getBoundingClientRect();
//   const buttonWidth = rect.width;
//   const buttonHeight = rect.height;

//   // திரையின் அதிகபட்ச எல்லைகள்
//   const maxX = document.documentElement.clientWidth - buttonWidth - padding;
//   const maxY = document.documentElement.clientHeight - buttonHeight - padding;

//   // Random position calculation
//   let randomX = padding + Math.random() * (maxX - padding);
//   let randomY = padding + Math.random() * (maxY - padding);

//   // திரைக்கு வெளியே போகாமல் இருக்க கட்டுப்பாடு
//   randomX = Math.max(padding, Math.min(randomX, maxX));
//   randomY = Math.max(padding, Math.min(randomY, maxY));

//   noBtn.style.left = `${randomX}px`;
//   noBtn.style.top = `${randomY}px`;
// }
function moveNoButton() {
  noBtn.style.position = "absolute";

  // பட்டன் நகர்வதற்கான சின்ன எல்லை (Distance limit)
  const distance = 200; // எவ்வளவு தூரம் நகரணும்னு இங்க மாத்திக்கலாம் மாப்ள

  // -80px லிருந்து +80px குள்ள மட்டும் ரேண்டமா நகரும்
  const randomX = (Math.random() - 0.6) * distance * 2;
  const randomY = (Math.random() - 0.6) * distance * 2;

  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// RESIZE EVENT
window.addEventListener("resize", () => {
  if (noBtn.style.position === "fixed") {
    moveNoButton();
  }
});


// DESKTOP
noBtn.addEventListener("mouseenter", () => {
  moveNoButton();
});


// MOBILE
noBtn.addEventListener("touchstart", (event) => {

  event.preventDefault();

  moveNoButton();

});


// KEYBOARD
noBtn.addEventListener("focus", () => {

  moveNoButton();

});


// IF THEY SOMEHOW CLICK
noBtn.addEventListener("click", (event) => {

  event.preventDefault();

  moveNoButton();

});


// KEEP BUTTON INSIDE SCREEN AFTER RESIZE
window.addEventListener("resize", () => {

  if (noBtn.style.position === "fixed") {

    const padding = 20;

    const maxX =
      window.innerWidth - noBtn.offsetWidth - padding;

    const maxY =
      window.innerHeight - noBtn.offsetHeight - padding;

    let currentX =
      parseFloat(noBtn.style.left) || padding;

    let currentY =
      parseFloat(noBtn.style.top) || padding;

    currentX = Math.max(
      padding,
      Math.min(currentX, maxX)
    );

    currentY = Math.max(
      padding,
      Math.min(currentY, maxY)
    );

    noBtn.style.left = `${currentX}px`;
    noBtn.style.top = `${currentY}px`;
  }

});