import React from 'react';
import {  SortByToolBar, SortByGroup, SortByBtn } from './styles';

export const SortBy = ({ sortBys }) => {
    return (
        <SortByToolBar>
            <SortByGroup >
                {
                    sortBys.map((sortBy, i) => (
                        <SortByBtn key={i}>
                            {sortBy.label}
                        </SortByBtn>)
                    )
                }
           </SortByGroup>
        </SortByToolBar>
    );
}