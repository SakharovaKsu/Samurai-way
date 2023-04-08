import React from 'react';

function Rating() {
  console.log('Rating rendering');

  return (
    <div>
      <Star selected={true}/>
      <Star selected={true}/>
      <Star selected={false}/>
      <Star selected={false}/>
      <Star selected={false}/>
    </div>
  )
}

type StarPropsType = {
  selected: boolean
}

function Star(props: StarPropsType) {
  console.log('Star rendering');

  if(props.selected === true) {
    return <span><b>star </b></span>
  }
  return <span>star </span>
}

export default Rating;