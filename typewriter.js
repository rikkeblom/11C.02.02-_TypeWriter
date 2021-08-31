"use strict";
document.querySelector("button").addEventListener("click", start);

const strings = document.querySelectorAll(".typewritten");
const numberofstrings = strings.length;
console.log("there are " + numberofstrings + " strings");
console.log(strings);
let globaliterator;
let globalmaxiterator;
let text;
let strlenght;
let slicenumber;
let localiterator;
let localmaxiterator;

function start() {
  globalinit();
}

function globalinit() {
  globaliterator = 0;
  globalmaxiterator = numberofstrings;
  globalloop();
}

function globalloop() {
  if (globaliterator < globalmaxiterator) {
    globaliterator++;
    text = strings[globaliterator - 1].textContent;
    strlenght = text.length;
    strings[globaliterator - 1].textContent = "";
    console.log("round: " + globaliterator);
    console.log("the full text is: " + text);
    console.log("the full text is " + strlenght + " characters long");

    localinit();

    function localinit() {
      localiterator = 0;
      localmaxiterator = strlenght;
      localloop();
    }

    function localloop() {
      if (localiterator < localmaxiterator) {
        localiterator++;
        console.log("local loop round " + localiterator);

        slicenumber = strlenght - localiterator;
        strings[globaliterator - 1].textContent = text.slice(0, text.length - slicenumber);
        let newestcharacter = text.charAt(localiterator - 1);
        // console.log(newestcharacter);
        if (newestcharacter === " ") {
          console.log("this is a space, loop: " + localiterator);
          document.querySelector("#typespace").play();
        } else if (newestcharacter === "a") {
          console.log(newestcharacter, ", sound 1, localloop " + localiterator);
          document.querySelector("#typekey1").play();
        } else if (newestcharacter === "e") {
          console.log(newestcharacter, ", sound 1, localloop " + localiterator);
          document.querySelector("#typekey1").play();
        } else if (newestcharacter === "u") {
          console.log(newestcharacter, ", sound 1, localloop " + localiterator);
          document.querySelector("#typekey1").play();
        } else if (newestcharacter === "i") {
          console.log(newestcharacter, ", sound 1, localloop " + localiterator);
          document.querySelector("#typekey1").play();
        } else if (newestcharacter === "o") {
          console.log(newestcharacter, ", sound 1, localloop " + localiterator);
          document.querySelector("#typekey1").play();
        } else if (newestcharacter === "æ") {
          console.log(newestcharacter, ", sound 1, localloop " + localiterator);
          document.querySelector("#typekey1").play();
        } else if (newestcharacter === "ø") {
          console.log(newestcharacter, ", sound 1, localloop " + localiterator);
          document.querySelector("#typekey1").play();
        } else if (newestcharacter === "å") {
          console.log(newestcharacter, ", sound 1, localloop " + localiterator);
          document.querySelector("#typekey1").play();
        } else {
          console.log(newestcharacter, ", sound 2, localloop " + localiterator);
          document.querySelector("#typekey2").play();
        }
        let miliseconds = 300 + Math.floor(Math.random() * 200);
        // console.log("random time is: " + miliseconds);
        setTimeout(localloop, miliseconds);
      } else {
        console.log("end of local loop");
        document.querySelector("#typereturn").play();
        globalloop();
      }
    }
  } else {
    console.log("global loop end");
  }
}

// const strlength = document.querySelector(".typewritten").textContent.length;
// const text = document.querySelector(".typewritten").textContent;

// let iterator;
// let maxiterator;
// let slicenumber;

// document.querySelector("button").addEventListener("click", start);

// function start() {
//   document.querySelector(".typewritten").textContent = " ";
//   init();
// }

// function init() {
//   iterator = 0;
//   maxiterator = strlength;
//   loop();
// }

// function loop() {
//   if (iterator < maxiterator) {
//     iterator++;
//     let slicenumber = strlength - iterator;
//     document.querySelector(".typewritten").textContent = text.slice(0, strlength - slicenumber);
//     let newestcharacter = text.charAt(iterator - 1);
//     if (newestcharacter === " ") {
//       console.log("this is a space, loop: " + iterator);
//       document.querySelector("#typespace").play();
//     } else if (newestcharacter === "a") {
//       console.log(newestcharacter, ", sound 1, loop " + iterator);
//       document.querySelector("#typekey1").play();
//     } else if (newestcharacter === "e") {
//       console.log(newestcharacter, ", sound 1, loop " + iterator);
//       document.querySelector("#typekey1").play();
//     } else if (newestcharacter === "u") {
//       console.log(newestcharacter, ", sound 1, loop " + iterator);
//       document.querySelector("#typekey1").play();
//     } else if (newestcharacter === "i") {
//       console.log(newestcharacter, ", sound 1, loop " + iterator);
//       document.querySelector("#typekey1").play();
//     } else if (newestcharacter === "o") {
//       console.log(newestcharacter, ", sound 1, loop " + iterator);
//       document.querySelector("#typekey1").play();
//     } else if (newestcharacter === "æ") {
//       console.log(newestcharacter, ", sound 1, loop " + iterator);
//       document.querySelector("#typekey1").play();
//     } else if (newestcharacter === "ø") {
//       console.log(newestcharacter, ", sound 1, loop " + iterator);
//       document.querySelector("#typekey1").play();
//     } else if (newestcharacter === "å") {
//       console.log(newestcharacter, ", sound 1, loop " + iterator);
//       document.querySelector("#typekey1").play();
//     } else {
//       console.log(newestcharacter, ", sound 2, loop " + iterator);
//       document.querySelector("#typekey2").play();
//     }

//     // console.log(newestcharacter);
//     let miliseconds = 300 + Math.floor(Math.random() * 200);
//     console.log("random time is: " + miliseconds);
//     setTimeout(loop, miliseconds);
//   } else {
//     console.log("end of loop");
//     document.querySelector("#typelast").play();
//   }
// }
