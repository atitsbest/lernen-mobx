import * as React from 'react';
import {observable} from 'mobx';
import {inject, observer} from 'mobx-react';

import { TodoStore } from '../stores/TodoStore';
import { STORE_TODO } from '../const/stores';
import { TodoList } from './TodoList';
import { AddTodoInput } from './AddTodoInput';

export interface AppProps {
}

@inject(STORE_TODO)
@observer
export default class App extends React.Component<AppProps, {}> {
    @observable filter = '';

    constructor(props: AppProps, context: any) {
        super(props, context);
    }

    getTodos(filter: string) {
        const store = (this.props as any)[STORE_TODO] as TodoStore;
        switch(filter) {
            case 'completed': return store.completedTodos;
            default: return store.allTodos;
        }
    }

    render() {
        const store = (this.props as any)[STORE_TODO] as TodoStore;

        return(
            <div>
                <AddTodoInput placeholder="Neuer Eintrag..." onCreate={store.addTodo} />
                <h2>Aufgaben</h2>
                <TodoList todos={store.openTodos} onDelete={store.deleteTodo} />
                <h4>Erledigt</h4>
                <TodoList todos={store.completedTodos} />
            </div>
        );
    }
}
