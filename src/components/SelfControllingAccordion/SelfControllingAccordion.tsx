import React, {useReducer, useState} from 'react';
import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function SelfControllingAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering');

    const stateCollapsed: StateType = {
        collapsed: false
    }

    // const [collapsed, setCollapsed] = useState(true)
    const [state, dispatch] = useReducer(reducer, stateCollapsed)

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => {dispatch({type: TOGGLE_COLLAPSED})}}/>

            {/*<button onClick={() => {setCollapsed(!collapsed)}}>+</button>*/}
            {!state.collapsed && <AccordionBody/>}
            {/*  Если в пропсе пришло true, то отрисуется аккордион, так как сравнение идет дальше после оператора И  */}
            {/*  Если же приходит false, то не рисуется, так как после оператора И дальше не идет, останавливается работа  */}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');

    return <h3 onClick={props.onClick}>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering');

    const items = ['Contacts', 'Music', 'Messages', 'Settings']
    return (
        <ul>
            {items.map((item, index) => <li key={index}> {item}</li>)}
        </ul>
    )
}

export default SelfControllingAccordion;