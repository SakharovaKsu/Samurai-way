import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    // collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering');

    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {props.collapsed && <AccordionBody/>}
            {/*  Если в пропсе пришло true, то отрисуется аккордион, так как сравнение идет дальше после оператора И  */}
            {/*  Если же приходит false, то не рисуется, так как после оператора И дальше не идет, останавливается работа  */}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');

    // onChange эта функция из App, при клике вызывается и меняется состояние
    return <h3 onClick={props.onChange}>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering');

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;