import React from "react";
import { Accordion } from "./Accordion";

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

export const App = () => {
    return (
        <div className="App">
            <br />
            <Accordion list={list} />
        </div>
    );
};
