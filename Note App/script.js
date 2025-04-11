const input = document.getElementById("input");
const btn = document.getElementById("btn");
const noteContainer = document.querySelector(".note_container");

let notes = JSON.parse(localStorage.getItem("notes")) || [];
function displayNotes() {

    while (noteContainer.children.length > 3) {
        noteContainer.removeChild(noteContainer.lastChild);
    }

    notes.forEach((note, index) => {
        const noteDiv = document.createElement("div");
        noteDiv.className = "note";
        noteDiv.innerHTML = `
            <p>${note.text}</p>
            <div>
                <button onclick="editNote(${index})">Edit</button>
                <button onclick="deleteNote(${index})">Delete</button>
            </div>
        `;
        noteContainer.appendChild(noteDiv);
    });
}

function addNote() {
    const noteText = input.value.trim();
    if (noteText) {
        notes.push({ text: noteText });
        localStorage.setItem("notes", JSON.stringify(notes));
        input.value = '';
        displayNotes();
    }
}

function editNote(index) {
    const newText = prompt("Edit your note:", notes[index].text);
    if (newText !== null) {
        notes[index].text = newText.trim();
        localStorage.setItem("notes", JSON.stringify(notes));
        displayNotes();
    }
}

function deleteNote(index) {
    if (confirm("Are you sure you want to delete this note?")) {
        notes.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notes));
        displayNotes();
    }
}

btn.addEventListener("click", addNote);
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addNote();
});

displayNotes();