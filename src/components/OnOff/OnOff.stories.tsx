import React, {useState} from "react";
import OnOff, {PropsType} from "./OnOff";
import {action} from "@storybook/addon-actions";
import {StoryFn} from "@storybook/react";

export default {
    title: 'OnOff/OnOff',
    component: OnOff,
}

// старая версия по сторибуку
// export const OnMode = () => <OnOff on={true} onChange={action('on or off clicked')} />
// export const OffMode = () => <OnOff on={false} onChange={action('on or off clicked')} />


// новый синтаксис по сторибуку
// args это какие-то пропсы, которые к нам приходят, что бы их много не плодить, используем сокращенную запись {...args}
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return  <OnOff on={value} onChange={setValue} />
}

const Template: StoryFn<PropsType> = (args) => <OnOff {...args}/>

// сюда вынесли то, что повторяется (деструкторизация)
const OnOffProps = {
    onChange: action('on or off clicked')
}
export const OnMode = Template.bind({}) // через bind делаем копию функции
// Здесь мы передаем то, что нужно положить в пропсы
OnMode.args = {
    ...OnOffProps,
    on: true
}

export const OffMode = Template.bind({})
OffMode.args = {
    ...OnOffProps,
    on: false
}