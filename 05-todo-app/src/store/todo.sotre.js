import {Todo} from "../todos/models/todo.models.js";


const Filters = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('First task'),
        new Todo('Second task'),
        new Todo('Third task'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log('Init Store');
}
