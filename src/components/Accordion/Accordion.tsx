import React from 'react';

export type ItemsType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    /**
     * optional color oh header text
     */
    color?: string
    items: ItemsType[]
    onClick: () => void
}


function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering');

    return (
        <div>
            <AccordionTitle color={props.color} title={props.titleValue} onChange={props.onChange} />
            {props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
            {/*  Если в пропсе пришло true, то отрисуется аккордион, так как сравнение идет дальше после оператора И  */}
            {/*  Если же приходит false, то не рисуется, так как после оператора И дальше не идет, останавливается работа  */}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');

    // onChange эта функция из App, при клике вызывается и меняется состояние
    return <h3 style={{color: props.color ? props.color : 'black'}} onClick={props.onChange}>{props.title}</h3>
}

type AccordionBodyType = {
    items: ItemsType[]
    onClick: (value: any) => void
}

const AccordionBody = React.memo(AccordionBodySecret)

function AccordionBodySecret(props: AccordionBodyType) {
    console.log('AccordionBody rendering');

    // с index нужно быть аккуратным, так как могут быть ошибки (конфликты в реакте), стоит использовать когда массив не меняется
    return (
        <ul>
            {props.items.map( (i, index) =>
                <li onClick={() => {props.onClick(i.value)}}
                    key={i.value}> {i.title}
                </li>)}
        </ul>
    )
}

export default Accordion;