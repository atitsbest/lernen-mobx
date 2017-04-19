import * as React from "react";
import { mount } from 'enzyme';
import App from "./App";


QUnit.test('<App> renders correctly (enzyme)', assert => {
    const app = mount(<App />);

    assert.equal(app.find('h1').text(), "It work's as an app");
});