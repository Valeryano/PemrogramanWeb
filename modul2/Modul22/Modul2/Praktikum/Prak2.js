document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-button">Hapus</button>
                <button class="edit-button">Edit</button>
            `;
            taskList.appendChild(li);

            // Event listener untuk tombol hapus
            const deleteButton = li.querySelector(".delete-button");
            deleteButton.addEventListener("click", function() {
                taskList.removeChild(li);
            });

            // Event listener untuk tombol edit
            const editButton = li.querySelector(".edit-button");
            editButton.addEventListener("click", function() {
                const taskItem = editButton.parentElement;
                const taskText = taskItem.querySelector("span");
                const newTaskText = prompt("Edit tugas:", taskText.innerText);
                if (newTaskText !== null) {
                    taskText.innerText = newTaskText;
                }
            });

            // Bersihkan input setelah menambahkan tugas
            taskInput.value = "";
        }
    });
});
