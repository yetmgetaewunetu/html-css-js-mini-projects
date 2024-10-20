const note_container = document.querySelector(".notess");
const newNote = document.querySelector(".input-box");

function addNote() {
  const note = `
    <p contentEditable=true> 
    ${newNote.value}
    <img src="./trash.png" alt="delete button"/>
    </p>
    `;
  //   let note = document.createElement("p");
  note_container.innerHTML += note;
  //   let img = document.createElement("img");
  //   img.setAttribute("src", "./trash.png");
  //   note.setAttribute("contentEditable", "true");
  //   note.appendChild(img);
  //   note_container.append(note);
  //   note.textContent = newNote.value;
  //   newNote.value = "";
  newNote.value = "";
  saveData();
}
note_container.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentNode.remove();
    saveData();
  }
});

const saveData = () => {
  localStorage.setItem("notes", note_container.innerHTML);
};
const loadData = () => {
  note_container.innerHTML = localStorage.getItem("notes");
};
loadData();
