"use strict";

const strlength = document.querySelector(".typewritten").textContent.length;
const text = document.querySelector(".typewritten").textContent;
document.querySelector(".typewritten").textContent = " ";

let iterator;
let maxiterator;
let slicenumber;

document.querySelector("button").addEventListener("click", start);

function start() {
  init();
}

function init() {
  iterator = 0;
  maxiterator = strlength;
  loop();
}

function loop() {
  if (iterator < maxiterator) {
    iterator++;
    let slicenumber = strlength - iterator;
    document.querySelector(".typewritten").textContent = text.slice(0, strlength - slicenumber);
    let newestcharacter = text.charAt(iterator - 1);
    if (newestcharacter === " ") {
      console.log("this is a space, loop: " + iterator);
      document.querySelector("#typespace").play();
    } else if (newestcharacter === "a") {
      console.log(newestcharacter, ", sound 1, loop " + iterator);
      document.querySelector("#typekey1").play();
    } else if (newestcharacter === "e") {
      console.log(newestcharacter, ", sound 1, loop " + iterator);
      document.querySelector("#typekey1").play();
    } else if (newestcharacter === "u") {
      console.log(newestcharacter, ", sound 1, loop " + iterator);
      document.querySelector("#typekey1").play();
    } else if (newestcharacter === "i") {
      console.log(newestcharacter, ", sound 1, loop " + iterator);
      document.querySelector("#typekey1").play();
    } else if (newestcharacter === "o") {
      console.log(newestcharacter, ", sound 1, loop " + iterator);
      document.querySelector("#typekey1").play();
    } else if (newestcharacter === "æ") {
      console.log(newestcharacter, ", sound 1, loop " + iterator);
      document.querySelector("#typekey1").play();
    } else if (newestcharacter === "ø") {
      console.log(newestcharacter, ", sound 1, loop " + iterator);
      document.querySelector("#typekey1").play();
    } else if (newestcharacter === "å") {
      console.log(newestcharacter, ", sound 1, loop " + iterator);
      document.querySelector("#typekey1").play();
    } else {
      console.log(newestcharacter, ", sound 2, loop " + iterator);
      document.querySelector("#typekey2").play();
    }

    // console.log(newestcharacter);
    let miliseconds = 300 + Math.floor(Math.random() * 200);
    console.log("random time is: " + miliseconds);
    setTimeout(loop, miliseconds);
  } else {
    console.log("end of loop");
    document.querySelector("#typelast").play();
  }
}

{
  /* <div id="sounds">
<audio id="typekey1" src="typekey1.mp3"></audio>
<audio id="typekey2" src="typekey2.mp3"></audio>
<audio id="typespace" src="typespace.mp3"></audio>
<audio id="typelast" src="typelastkey.mp3"></audio>
<audio id="typereturn" src="typecarriagereturn.mp3"></audio>
</div> */
}
