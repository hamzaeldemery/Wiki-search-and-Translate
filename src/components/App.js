import React, { useState } from "react";
import Header from "./Header";
import TranslateWiki from "./TranslateWiki";
import { Accordion } from "./accordion/Accordion";
import { Dropdown } from "./dropDown/DropDown";
import { Translate } from "./tranlate/Translate";

import { Route } from "./Route";

const list = [
    {
        title: "React",
        content: "I love react",
    },
    {
        title: "Why react?",
        content: "React makes the website look Great!",
    },
    {
        title: "What is react?",
        content: "React consist of FC that lets you rerender them onChanges",
    },
];

const data = {
    title: "Choose a color",
    choices: [
        {
            value: "red",
            description: "the Color red",
        },
        {
            value: "green",
            description: "Green is the value",
        },
        {
            value: "blue",
            description: "Picked blue!",
        },
    ],
};
export const App = () => {
    const [selected, setSelected] = useState(data.choices[0]);
    return (
        <div className="App" style={styling.app}>
            <Header />
            <Route path="/">
                <Accordion list={list} />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
            <Route path="/translate-wiki">
                <TranslateWiki />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    data={data}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
        </div>
    );
};

const styling = {
    app: {
        paddingTop: "10px",
    },
};
