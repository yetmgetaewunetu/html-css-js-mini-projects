const surprise = document.getElementById("surprise");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const image = document.getElementById("avatar");
const name = document.getElementById("nameOfPerson");
const job = document.getElementById("job");
prev.addEventListener("click", previousPerson);
surprise.addEventListener("click", randomPerson);

const persons = [
  { img: "img/man1.jpg", nameP: "akalu aklilu", job: "Web Developer" },
  { img: "img/man2.jpg", nameP: "abebe beso bela", job: "Android Developer" },
  { img: "img/girl1.jpg", nameP: "Fikir Fikir", job: "Fullstack Developer" },
  { img: "img/girl2.jpg", nameP: "selam selamu", job: "UI/UX Designer" },
];
var index = 0;

function nextPerson() {
  index = (index + 1) % persons.length;
  image.setAttribute("src", persons[index].img.toString());
  name.innerText = persons[index].nameP;
  job.innerText = persons[index].job;
}

function previousPerson() {
  if (index === 0) {
    index = persons.length;
  }

  index--;

  image.setAttribute("src", persons[index].img.toString());
  name.innerText = persons[index].nameP;
  job.innerText = persons[index].job;
}

function randomPerson() {
  index = Math.floor(Math.random() * persons.length);
  image.setAttribute("src", persons[index].img.toString());
  name.innerText = persons[index].nameP;
  job.innerText = persons[index].job;
}
