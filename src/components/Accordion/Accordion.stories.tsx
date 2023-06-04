import React, {useState} from "react";
import Accordion, {AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {StoryFn} from "@storybook/react";

export default {
    title: 'Accordions/Accordion',
    component: Accordion,
}

// старая версия по сторибуку
// export const CollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={action('Accordion mode change event fired')} />
// export const UncollapsedMode = () => <Accordion titleValue={'User'} collapsed={false} onChange={action('Accordion mode change event fired')} />
// export const ModeChanging = () => {
//     const [value, setValue] = useState<boolean>(true)
//     return  <Accordion titleValue={'User'} collapsed={value} onChange={() => setValue(!value)} />
// }



// новый синтаксис по сторибуку
// args это какие-то пропсы, которые к нам приходят, что бы их много не плодить, используем сокращенную запись {...args}
const Template: StoryFn<AccordionPropsType> = (args) => <Accordion {...args} />

// сюда вынесли то, что повторяется (деструкторизация)
const MenuProps = {
    collapsed: true,
    onChange: action('Accordion mode change event fired')
}

export const CollapsedMode2 = Template.bind({}) // через bind делаем копию функции
// Здесь мы передаем то, что нужно положить в пропсы
CollapsedMode2.args = {
    ...MenuProps,
    titleValue: 'Menu'
}

export const UncollapsedMode2 = Template.bind({})
CollapsedMode2.args = {
    ...MenuProps,
    titleValue: 'User',
}

export const ModeChanging: StoryFn<AccordionPropsType>  = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return  <Accordion {...args} collapsed={value} onChange={() => setValue(!value)} />
}

ModeChanging.args = {
    titleValue: 'Book'
}