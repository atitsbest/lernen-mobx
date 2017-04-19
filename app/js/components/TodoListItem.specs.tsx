import * as React from "react";
import { mount, shallow } from 'enzyme';
import { TodoListItem } from "./TodoListItem";
import TodoModel from '../models/TodoModel';


QUnit.test('<TodoListItem> renders name', assert => {
    const model = new TodoModel('NAME');
    const app = shallow(<TodoListItem model={model} />);

    const li = app.find('.todo-list-item');
    const name = li.find('.name').text();
    const checkbox = li.find({type: 'checkbox'});
    assert.ok(li);
    assert.equal(name, "NAME");
});

QUnit.test('<TodoListItem> renders completed with doneDate', assert => {
    const model = new TodoModel('NAME');
    model.setDone();
    const app = shallow(<TodoListItem model={model} />);

    const li = app.find('.todo-list-item');
    const checkbox = li.find({type: 'checkbox'});
    assert.equal(checkbox.props().checked, true, 'Checkbox sollte angehakt sein!');
});

QUnit.test('<TodoListItem> sets doneDate when checkbox is checked', assert => {
    const model = new TodoModel('NAME');
    const app = mount(<TodoListItem model={model} />);

    const li = app.find('.todo-list-item');
    const checkbox = li.find({type: 'checkbox'});
    assert.equal(checkbox.props().checked, false, 'Checkbox sollte nicht angehakt sein!');

    checkbox.simulate('change', {target: {checked: true}});
    assert.ok(model.doneDate, 'Datum sollte gesetzt sein.');
    assert.equal(checkbox.props().checked, true, 'Checkbox sollte angehakt sein!');
});

QUnit.test('<TodoListItem> clears doneDate when checkbox is unchecked', assert => {
    const model = new TodoModel('NAME');
    model.setDone();
    const app = mount(<TodoListItem model={model} />);

    const li = app.find('.todo-list-item');
    const checkbox = li.find({type: 'checkbox'});
    assert.equal(checkbox.props().checked, true, 'Checkbox sollte angehakt sein!');

    checkbox.simulate('change', {target: {checked: false}});
    assert.notOk(model.doneDate, 'Datum sollte nicht gesetzt sein.');
    assert.equal(checkbox.props().checked, false, 'Checkbox sollte nicht angehakt sein!');
});