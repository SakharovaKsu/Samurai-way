import React from 'react';

// type CollapsedType = {
//     collapsed: boolean
// }

type ActionType = {
    type: string
}

export const reducer = (state: boolean, action: ActionType) => {
    if(action.type === 'TOGGLE-COLLAPSED') {
        // const newState = {...state, state}
        return !state
    }
    return state
}