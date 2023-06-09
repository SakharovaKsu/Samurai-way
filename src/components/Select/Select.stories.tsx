import React, {useState} from "react";
import {ListsType} from "../../App";
import Select2 from "./Select-2";


export default {
    title: 'Select/Select',
    component: Select2,
}
//
// const Template: StoryFn<SelectType> = (args) => <Select2 {...args} />
//
// export const SelectMenu = Template.bind({})
//
const lists: ListsType[] = [
    {id: '1', title: 'Sort'},
    {id: '2', title: 'Popular'},
    {id: '3', title: 'By rating'},
    {id: '4', title: 'Minimum price'},
    {id: '5', title: 'Maximum price'}
]
//
// SelectMenu.args = {
//     lists: lists,
//     onChange: action('Value change'),
//     value: '1'
// }

export const BaseExample = () => {
    const [value, setValue] = useState('1')

    return (
        <Select2 onChange={setValue} value={value} lists={lists} />
    )
}

export const WithoutValue = () => {
    const [value, setValue] = useState('')

    return (
        <Select2 onChange={setValue} value={value} lists={lists} />
    )
}