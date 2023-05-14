import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';
import OnOff from "./components/OnOff/OnOff";
import SelfControllingAccordion from "./components/SelfControllingAccordion/SelfControllingAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";

function App(props: any) {

    return (
        <div className="App">
            <PageTitle title={ "This is APP Component" }/>
            {/* контролируемый рейтинг, так как данные мы передаем здесь */}
            <Accordion titleValue={ "Menu" } collapsed={true}/>
            <Rating value={3}/>
            <PageTitle title={ "My friends" }/>
            <Accordion titleValue={ "User" } collapsed={false}/>
            <Rating value={5} />

            <OnOff/>
            <OnOff/>

            {/* некотролируемый рейтинг аккорлион, так как данные передаем через стайт и меняем по клику */}
            <SelfControllingAccordion titleValue={'Profile'}/>
            <UncontrolledRating />
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
