import * as React from "react";
import { mount, shallow } from 'enzyme';
import { AddTodoInput } from "./AddTodoInput";
import TodoModel from '../models/TodoModel';

QUnit.module('<AddTodoInput>');

QUnit.test('renders input field', assert => {
    const app = mount(<AddTodoInput placeholder="Name..." onCreate={undefined} />);

    const input = app.find('input');
    assert.equal(input.length, 1);
    assert.equal(input.props().placeholder, "Name...");
});

QUnit.test('add new todo', assert => {
    let addName = null;
    const addFn = (name:string) => addName = name;
    const app = shallow(<AddTodoInput placeholder="Name..." onCreate={addFn} />);

    const input = app.find('input[@type="text"]').first();
    input.simulate('change', {target: { value: 'TEST '}});
    input.simulate('keydown', {which: 13});

    assert.ok(addName);
    assert.equal(addName, "TEST");
});
