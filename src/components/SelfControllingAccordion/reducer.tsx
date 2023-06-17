export type StateType = {
    collapsed: boolean
}

type ActionType = {
    type: string
}

export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

// обязательно нужно типизировать то, чт выходит из reducer (типизация после скобок)

export const reducer = (state: StateType, action: ActionType):StateType => {
    // if(action.type === TOGGLE_COLLAPSED) {
    //     return {
    //         ...state, collapsed: !state.collapsed
    //     }
    // }
    // return state

    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {
                ...state, collapsed: !state.collapsed
            }
        default:
            return state
    }
}