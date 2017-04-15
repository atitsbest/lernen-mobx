import * as React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

import { TodoListItem } from './TodoListItem';

@observer
export default class TodoList extends React.Component<undefined, undefined> {
    @observable tasks: any[] = ['das', 'ist', 'ein', 'test'];

    constructor() {
        super();
    }

    render() {
        let task_list_items = this.tasks.map(t => <TodoListItem name={t} doneDate={undefined}></TodoListItem>);

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