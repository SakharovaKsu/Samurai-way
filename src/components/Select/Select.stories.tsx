import React, {useState} from "react";
import {StoryFn} from "@storybook/react";
import {SelectType} from "./Select";
import {ListsType} from "../../App";
import {action} from "@storybook/addon-actions";
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
    return (
        <Select2 onChange={action('Value change')} value={'2'} lists={lists} />
    )
}

export const WithoutValue = () => {
    return (
        <Select2 onChange={action('Value change')} lists={lists} />
    )
}