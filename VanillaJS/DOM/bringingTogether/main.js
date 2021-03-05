const Yo = document.querySelector(".btn");
const Welcome = document.querySelector(".box");
const Bottom = document.querySelector(".bottom");

console.log(Welcome.innerText);

const smoothScrollify = (source, dest) => {
  source.addEventListener("click", function () {
    dest.scrollIntoView({ behavior: "smooth" });
  });
};
smoothScrollify(Yo, Welcome);
Yo.addEventListener("click", function () {
  if (Welcome.innerText === "Welcome") {
    Welcome.innerText = "How are you?";
    Welcome.classList.add("fancy");
  } else if (Welcome.innerText === "How are you?") {
    Welcome.innerText = "Welcome";
    Welcome.classList.remove("fancy");
  }
});
smoothScrollify(Welcome, Bottom);
smoothScrollify(Bottom, Yo);

const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char >= splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}

console.log(splitText);
