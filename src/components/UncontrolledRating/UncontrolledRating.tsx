import React, {useState} from 'react';

type StarPropsType = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}
function UncontrolledRating() {
    console.log('Rating rendering');

    const [value, setValue] = useState(0)

    return (
        <div>
            {/* value закидываем данные, за что отвечает каждый star */}
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>
        </div>
    )
}

function Star(props: StarPropsType) {
    console.log('Star rendering');

    return <span
        onClick={() => props.setValue(props.value)}>
        {props.selected ? <b>star </b> : 'star '}
    </span>

    // if(props.selected === true) {
    //   return <span><b>star </b></span>
    // }
    // return <span>star </span>
}

export default UncontrolledRating;