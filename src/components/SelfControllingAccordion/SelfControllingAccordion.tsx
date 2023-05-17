import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function SelfControllingAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering');

    const [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>
            {/*<button onClick={() => {setCollapsed(!collapsed)}}>+</button>*/}
            {!collapsed && <AccordionBody/>}
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

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default SelfControllingAccordion;