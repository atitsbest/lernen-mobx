import * as React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

import TodoList from './TodoList';

export default class App extends React.Component<{}, {}> {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <h1>It work's as an app</h1>
                <TodoList />
            </div>
        );
    }
}
