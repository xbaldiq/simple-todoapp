const defTodos = [{
    id: 1,
    text: 'todo 1'
}, {
    id: 2,
    text: 'todo 2'
},{
    id: 3,
    text: 'todo 3'
}
];

const todos = JSON.parse(localStorage.getItem('todos')) || defTodos

const komponen = {
    textInputan: document.getElementById('text-inputan'),
    btnInputan: document.getElementById('btn-inputan'),
    btnReset: document.getElementById('btn-reset'),
    listOfTodos: document.getElementById('list-of-todos')
}

// -- Component's Function
const storeTodo = (todo) => {
    todos.push(
        {
            id: todos.length + 1,
            text: todo
        })
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodo()
}

const deleteTodo = (index) => {
    todos.splice(index, 1)
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodo()
}

const renderTodo = () => {
    komponen.listOfTodos.innerHTML = null

    if (todos) {
        // console.log(todos)
        todos.forEach((todo, index) => {
            const newTodo = document.createElement('li')
            newTodo.innerText = todo.text

            const deleteButton = document.createElement('button')
            deleteButton.innerText = 'delete'
            deleteButton.addEventListener('click', () => deleteTodo(index))
            newTodo.append(' ............ ', deleteButton)

            komponen.listOfTodos.append(newTodo)
        })
    }

}

// -- Event Listener
const klikBtnAdd = () => {
    if (komponen.textInputan.value) {
        const isiInputan = komponen.textInputan.value

        storeTodo(isiInputan);
        console.log(todos)

        komponen.textInputan.value = ''
    }
}

const klikBtnReset = () => {
    localStorage.clear()
    window.location.reload()
}

// -- Init Listener

komponen.btnInputan.addEventListener('click', () => klikBtnAdd())
komponen.btnReset.addEventListener('click', () => klikBtnReset())

// -- Main App running

renderTodo();