let imageurls = [
  "image/1.jpg",
  "image/2.jpg",
  "image/3.jpg",
  "image/4.jpg",
  "image/5.jpg",
];

const p = document.getElementById("prev");
const n = document.getElementById("next");
const img = document.querySelector(".container img");

let index = 0;

function showImgae() {
  img.src = imageurls[index];
}

n.addEventListener("click", () => {
  index = (index + 1) % imageurls.length;
  showImgae();
});

p.addEventListener("click", () => {
  index = (index - 1 + imageurls.length) % imageurls.length;
  showImgae();
});

setInterval(() => {
  index = (index + 1) % imageurls.length;
  showImgae();
}, 2000);
