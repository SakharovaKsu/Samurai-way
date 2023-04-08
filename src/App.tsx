import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';

function App() {
  console.log('App rendering');

  return (
    <div className="App">
      <PageTitle title={ "This is APP Component" }/>
      <Accordion titleValue={ "Menu" } collapsed={true}/>
      <Rating/>
      <PageTitle title={ "My friends" }/>
      <Accordion titleValue={ "User" } collapsed={false}/>
      <Rating />
    </div>
  );
}

// Типизируем, что должно попасть в пропс
type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  console.log('AppTitle rendering');

  return <h1>{ props.title }</h1>
}

export default App;
