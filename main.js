document.addEventListener('DOMContentLoaded', function() {
    const addBtn = document.querySelector('#btn');
    const tasksContainer = document.querySelector("#todoCards");

    // Set up each task card for CKEditor and interactions
    function setupTaskCard(taskCard) {
        const textArea = taskCard.querySelector('.task');
        const delBtn = taskCard.querySelector('.delBtn');
        const saveBtn = taskCard.querySelector('.saveBtn');

// Initialize CKEditor on focus
        textArea.addEventListener('focus', function() {
            if (!textArea.hasAttribute('data-ckeditor-initialized')) {
                CKEDITOR.replace(textArea, {
                    on: {
                        instanceReady: function(ev) {
                            ev.editor.on('change', function () {
                                saveBtn.classList.add('show'); // Show save button on change
                            });
                        }
                    }
                });
            }
        });

        CKEDITOR.config.autoParagraph = false;

// Save changes from CKEditor back to the textarea
        saveBtn.addEventListener('click', function() {
            console.log("Save button clicked for", textArea.id);
            const editor = CKEDITOR.instances[textArea.id];
            if (editor) {
                textArea.value = editor.getData(); // Update the textarea with data from CKEditor without the code
                editor.destroy(); // Destroy the CKEditor immediatly
                textArea.removeAttribute('data-ckeditor-initialized');
                saveBtn.classList.remove('show'); // Hide save button after saving
            }
        });
        
// Delete task
 delBtn.addEventListener('click', function() {
       taskCard.remove();
          updateCount();
        });
    }

// Function to add a new task card
    function addTask() {
        const newTask = document.createElement('div');
        newTask.classList.add('todoCard');
        newTask.innerHTML = `
            <textarea class="task" id="task" maxlength="200" cols="20" rows="15">New task</textarea>
            <span class="delBtn"><i class="fa-solid fa-trash-can"></i></span>
            <button class="saveBtn">Save</button>
        `;
        tasksContainer.appendChild(newTask);
        setupTaskCard(newTask);
        updateCount();
    }

// Function to update the count of task cards
    function updateCount() {
        const count = tasksContainer.children.length;
        document.getElementById('count').innerText = 'Count: ' + count;
    }

// Set up existing task cards on the page
    document.querySelectorAll('.todoCard').forEach(setupTaskCard);
    addBtn.addEventListener('click', addTask);
});
