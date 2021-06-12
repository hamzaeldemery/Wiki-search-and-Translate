import React, { useState } from "react";
import { Accordion } from "./accordion/Accordion";
import { List } from "./wikiList/List";
import { Dropdown } from "./dropDown/DropDown";
import { Translate } from "./tranlate/Translate";

const list = [
    {
        title: "What is react",
        content: "React is a js framework",
    },
    {
        title: "How does react work",
        content: "React works using compontents",
    },
    {
        title: "Why react?",
        content: "React is my favourite",
    },
];

const dropdownData = {
    name: "color",
    title: "Pick the color",
    choices: [
        {
            description: "The color red",
            value: "red",
        },
        {
            description: "The color green",
            value: "green",
        },
        {
            description: "The shade blue",
            value: "blue",
        },
    ],
};

export const App = () => {
    const [selected, setSelected] = useState(dropdownData.choices[0]);
    return (
        <div className="App">
            <br />
            <div>
                <Accordion list={list} />
            </div>
            <br />
            <div>
                <List />
            </div>
            <br />
            <div>
                <Dropdown
                    selected={selected}
                    onSelectedChange={setSelected}
                    data={dropdownData}
                />
            </div>
            <br />
            <div>
                <Translate />
            </div>
        </div>
    );
};
