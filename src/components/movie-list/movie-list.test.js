import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import MovieList from './index';

describe('Component: MovieList', () => {
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
    test('should create List Movie  component', () => {
        const props  = {
            movies: [{
              id: 2,
              type: 'poster',
              rank: 2,
              synopsis: 'Epic tale in which an intrepid archaeologist tries to beat a band of Nazis to a unique religious relic which is central to their plans for world domination. Battling against a snake phobia and a vengeful ex-girlfriend, Indiana Jones is in constant peril, making hair\'s-breadth escapes at every turn in this celebration of the innocent adventure movies of an earlier era.',
              title: 'Raiders of the Lost Ark',
              imageUrl: 'https://preview.ibb.co/fn5Xyp/raiders.jpg',
              releaseDate: 1981
            }]
        };
        act(() => {
            render(<MovieList movies={props.movies} />, container);
        });

        expect(container.querySelector('#movieUrl').src).toEqual(props.movies[0].imageUrl);
        expect(container.querySelector('h4').textContent).toEqual(`${props.movies[0].title}`);
        expect(container.querySelector('li').children.length).toBe(2)

        // const content = container.querySelector('.content');
        // act(() => {
        //     content.dispatchEvent(new MouseEvent('click', {bubbles: true}));
        // });
        // expect(container.querySelector('#synopsis').textContent).toEqual(props.movies[0].synopsis);
        // expect(container.querySelector('span').textContent).toEqual(`${props.movies.length}. `);
    })
});