import * as React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

import { TodoListItem } from './TodoListItem';
import TodoModel from '../models/TodoModel';

@observer
export default class TodoList extends React.Component<undefined, undefined> {
    @observable todos: any[] = [new TodoModel('Das'), new TodoModel('ist')];

    constructor() {
        super();
    }

    render() {
        let task_list_items = this.todos.map(m => <TodoListItem model={m}></TodoListItem>);

        return(
            <div>
                <h2>Todo List</h2>
                <ol>
                    {task_list_items}
                </ol>

            </div>
            
        )
    }
}