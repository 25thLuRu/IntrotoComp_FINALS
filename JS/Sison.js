const subject = document.getElementById("openSubs");
const changeStuds = document.getElementById("changeStud");
const container = document.getElementById("subjectContainer");
const text = document.getElementById("text1");
const studBox = document.getElementById("studentBox");

//

subject.addEventListener("click", () => {
  text.classList.toggle("swap");
  container.classList.toggle("move");
});

changeStuds.addEventListener("click", () => {
  studBox.classList.toggle("studentBoxShow");
  text.classList.remove("swap");
  container.classList.remove("move");
  subject.classList.toggle("hide");
});
