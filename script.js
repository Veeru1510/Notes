const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    
    let img = document.createElement("img");
    img.src = "images/delete.png";
    
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
    
    updateStorage();

    inputBox.onkeyup = function() {
        updateStorage();
    };
})

notesContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
})
