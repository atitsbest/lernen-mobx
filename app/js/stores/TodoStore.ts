import {observable, computed, action } from 'mobx';
import TodoModel from '../models/TodoModel';

export class TodoStore {
    @observable private _todos: Array<TodoModel> = [];

    constructor() {
        setTimeout(action(() => {
            ['das', 'ist', 'ein', 'test'].forEach(w => this._todos.push(new TodoModel(w)));
        }),
        1000);
    }

    @action
    addTodo = (name:string) => {
        this._todos.push(new TodoModel(name));
    }

    @action
    deleteTodo = (todo: TodoModel) => {
        this._todos = this._todos.filter(t => t !== todo);
    }

    @computed
    get allTodos() {
        return this._todos;
    }

    @computed 
    get completedTodos() {
        return this._todos.filter(t => t.doneDate !== null);
    }

    @computed 
    get openTodos() {
        return this._todos.filter(t => t.doneDate === null);
    }
}