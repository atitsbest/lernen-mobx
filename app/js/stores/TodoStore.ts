import {observable} from 'mobx';
import TodoModel from '../models/TodoModel';

export class TodoStore {
    @observable private _todos: Array<TodoModel> = [];

    constructor() {
        ['das', 'ist', 'ein', 'test'].forEach(w => this._todos.push(new TodoModel(w)));
    }

    getAllTodos() {
        return this._todos;
    }
}