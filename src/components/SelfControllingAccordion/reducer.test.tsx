import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('reduce should be true', () => {
    const stateCollapsed: StateType = {
        collapsed: false
    }

    const newState = reducer(stateCollapsed, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(true)
})

test('reduce should be false', () => {
    const stateCollapsed: StateType = {
        collapsed: true
    }

    const newState = reducer(stateCollapsed, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(false)
})