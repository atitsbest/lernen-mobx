import * as React from "react";
import { mount } from 'enzyme';
import { TodoList } from "./TodoList";
import TodoModel from '../models/TodoModel';


QUnit.test('<TodoList> renders all items', assert => {
    const todos = ['ein', 'test'].map(w => new TodoModel(w));
    const app = mount(<TodoList todos={todos} />);

    const li = app.find('.todo-list-item');
    assert.equal(li.length, 2);
});
