import React from 'react';
import { times } from 'ramda';
import { Card } from '../card';

export const Game = () => {
    return (
        <div>
            {
                times(Card, 5)
            }
        </div>
    )
}