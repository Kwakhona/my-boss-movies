import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Movie from './index';

describe('Component: Movie', () => {
    let container = null;
    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        // cleanup on exiting
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });
    test('should create Movie component', () => {
        const props = {title:'MovieTitle', synopsis:'Synopsis', imageUrl:'http://www.google.com/img', index: 1 };
        act(() => {
            render(<Movie {...props} />, container);
        });

        expect(container.querySelector('#movieUrl').src).toEqual(props.imageUrl);
        expect(container.querySelector('h4').textContent).toEqual(`${props.index}. ${props.title}`);
        expect(container.querySelector('#synopsis').textContent).toEqual(props.synopsis);
        expect(container.querySelector('span').textContent).toEqual(`${props.index}. `);
    })
});