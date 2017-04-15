import * as React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

export interface TodoListItemProps {
    name: string,
    doneDate: Date
}

@observer
export class TodoListItem extends React.Component<TodoListItemProps, undefined> {

    render() {
        return(
            <li className="todo-list-item">
                <input type="checkbox" checked={this.props.doneDate !== undefined} />
                <strong className="name">{this.props.name}</strong>            
            </li>
        )
    }
}