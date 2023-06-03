import React, {useState} from "react";
import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion,
}

export const CollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={action('Accordion mode change event fired')} />
export const UncollapsedMode = () => <Accordion titleValue={'User'} collapsed={false} onChange={action('Accordion mode change event fired')} />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return  <Accordion titleValue={'User'} collapsed={value} onChange={() => setValue(!value)} />
}