import * as React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

import { TodoListItem } from './TodoListItem';
import TodoModel from '../models/TodoModel';

export interface TodoListProps {
    todos: Array<TodoModel>
}

@observer
export class TodoList extends React.Component<TodoListProps, undefined> {
    constructor() {
        super();
    }

    render() {
        let task_list_items = this.props.todos.map(m => <TodoListItem model={m}></TodoListItem>);

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