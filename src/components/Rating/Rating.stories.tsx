import React, {useState} from "react";
// import {action} from "@storybook/addon-actions";
import Rating, {RatingPropsType, RatingValueType} from "./Rating";
import {StoryFn} from "@storybook/react";

export default {
    title: 'Ratings/Rating',
    component: Rating,
}

// старая версия по сторибуку
// export const EmptyStars = () => <Rating value={0} onClick={x => x} />
// export const Rating1 = () => <Rating value={1} onClick={x => x} />
// export const Rating2 = () => <Rating value={2} onClick={x => x} />
// export const Rating3 = () => <Rating value={3} onClick={x => x} />
// export const Rating4 = () => <Rating value={4} onClick={x => x} />
// export const Rating5 = () => <Rating value={5} onClick={x => x} />
export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} onClick={value => setRating(value)}/>
}



// новый синтаксис по сторибуку
// args это какие-то пропсы, которые к нам приходят, что бы их много не плодить, используем сокращенную запись {...args}
const Template: StoryFn<RatingPropsType> = (args) => <Rating {...args}/>

const RatingProps = {
    onClick: () => {}
}
export const EmptyStars = Template.bind({})
EmptyStars.args = {
    ...RatingProps,
    value: 0
}

export const Rating1 = Template.bind({})
EmptyStars.args = {
    ...RatingProps,
    value: 1
}

export const Rating2 = Template.bind({})
EmptyStars.args = {
    ...RatingProps,
    value: 2
}

export const Rating3 = Template.bind({})
EmptyStars.args = {
    ...RatingProps,
    value: 3
}

export const Rating4 = Template.bind({})
EmptyStars.args = {
    ...RatingProps,
    value: 4
}

export const Rating5 = Template.bind({})
EmptyStars.args = {
    ...RatingProps,
    value: 5
}

